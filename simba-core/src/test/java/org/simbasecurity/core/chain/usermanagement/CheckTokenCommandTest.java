package org.simbasecurity.core.chain.usermanagement;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.simbasecurity.core.chain.ChainContext;
import org.simbasecurity.core.chain.Command;
import org.simbasecurity.core.domain.UserTestBuilder;
import org.simbasecurity.core.domain.communication.token.Token;
import org.simbasecurity.core.service.communication.token.UserTokenService;

import java.util.Optional;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.simbasecurity.core.chain.Command.State.CONTINUE;
import static org.simbasecurity.core.chain.Command.State.ERROR;

@RunWith(MockitoJUnitRunner.class)
public class CheckTokenCommandTest {


    @Mock
    private ChainContext chainContextMock;
    @Mock
    private UserTokenService userTokenServiceMock;

    @InjectMocks
    private CheckTokenCommand checkTokenCommand;

    @Test
    public void execute_withoutTokenInDatabank_statusError() throws Exception {
        when(chainContextMock.getToken()).thenReturn(Optional.of("someUUID"));
        when(userTokenServiceMock.getUserForToken(Token.fromString("someUUID"))).thenReturn(Optional.empty());

        Command.State state = checkTokenCommand.execute(chainContextMock);

        Assertions.assertThat(state).isEqualTo(ERROR);
        verify(chainContextMock).redirectToWrongToken();
    }

    @Test
    public void execute_withoutTokenInContext_statusError() throws Exception {
        when(chainContextMock.getToken()).thenReturn(Optional.empty());

        Command.State state = checkTokenCommand.execute(chainContextMock);

        Assertions.assertThat(state).isEqualTo(ERROR);
        verify(chainContextMock).redirectToWrongToken();
    }

    @Test
    public void execute_withTokenInContextAndDatabase_statusContinue() throws Exception {
        when(chainContextMock.getToken()).thenReturn(Optional.of("sleutel!"));
        when(userTokenServiceMock.getUserForToken(Token.fromString("sleutel!"))).thenReturn(Optional.of(UserTestBuilder.aDefaultUser().build()));

        Command.State state = checkTokenCommand.execute(chainContextMock);

        Assertions.assertThat(state).isEqualTo(CONTINUE);
    }
}