package org.simbasecurity.core.service.communication;

import com.google.common.collect.ImmutableMap;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.simbasecurity.core.domain.User;
import org.simbasecurity.core.domain.communication.token.Token;
import org.simbasecurity.core.domain.user.EmailAddress;
import org.simbasecurity.core.service.communication.mail.MailService;
import org.simbasecurity.core.service.communication.mail.LinkGenerator;
import org.simbasecurity.core.service.communication.reset.password.ResetPasswordService;
import org.simbasecurity.core.service.communication.reset.password.ResetPasswordTemplateService;
import org.simbasecurity.core.service.communication.token.UserTokenService;
import org.springframework.test.util.ReflectionTestUtils;

import java.net.URL;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.simbasecurity.core.domain.Language.en_US;
import static org.simbasecurity.core.domain.UserTestBuilder.aDefaultUser;
import static org.simbasecurity.core.domain.user.EmailAddress.email;
import static org.simbasecurity.core.service.communication.reset.password.ResetPasswordReason.FORGOT_PASSWORD;
import static org.simbasecurity.core.service.communication.reset.password.ResetPasswordReason.NEW_USER;
import static org.simbasecurity.core.service.communication.mail.Mail.mail;

@RunWith(MockitoJUnitRunner.class)
public class ResetPasswordServiceTest {

    @Mock
    private MailService mailServiceMock;
    @Mock
    private LinkGenerator linkGeneratorMock;
    @Mock
    private UserTokenService tokenManagerMock;
    @Mock
    private ResetPasswordTemplateService templateServiceMock;

    @InjectMocks
    private ResetPasswordService resetPasswordService;

    @Before
    public void setUp() throws Exception {
        ReflectionTestUtils.setField(resetPasswordService, "resetPasswordFromAddress", "bla@hotmail.com");
    }

    @Test
    public void sendMesage_WillGenerateTokenAndLinkAndSendMail() throws Exception {
        EmailAddress email = email("something@mail.com");
        User user = aDefaultUser()
                .withEmail(email)
                .withLanguage(en_US)
                .build();
        Token token = Token.generateToken();
        when(tokenManagerMock.generateToken(user)).thenReturn(token);
        URL link = new URL("http://www.google.com");
        when(linkGeneratorMock.generateResetPasswordLink(token)).thenReturn(link);
        when(templateServiceMock.createMailBody(FORGOT_PASSWORD, en_US, link.toString())).thenReturn("someBody");

        resetPasswordService.sendResetPasswordMessageTo(user, FORGOT_PASSWORD);

        verify(mailServiceMock).sendMail(mail().from(email("bla@hotmail.com")).to(email).subject("reset password").body("someBody"));
    }
}