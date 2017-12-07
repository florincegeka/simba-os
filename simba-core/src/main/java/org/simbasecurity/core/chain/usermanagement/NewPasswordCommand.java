package org.simbasecurity.core.chain.usermanagement;

import org.simbasecurity.core.audit.Audit;
import org.simbasecurity.core.audit.AuditLogEventFactory;
import org.simbasecurity.core.chain.ChainContext;
import org.simbasecurity.core.chain.Command;
import org.simbasecurity.core.exception.SimbaException;
import org.simbasecurity.core.service.CredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

import static org.simbasecurity.core.audit.AuditMessages.PASSWORD_CHANGED;
import static org.simbasecurity.core.audit.AuditMessages.PASSWORD_NOT_VALID;

@Component
public class NewPasswordCommand implements Command {

    @Autowired
    private CredentialService credentialService;
    @Autowired
    private Audit audit;
    @Autowired
    private AuditLogEventFactory auditLogEventFactory;


    @Override
    public State execute(ChainContext context) throws Exception {
        Optional<String> maybePassword = context.getNewPassword();
        String passwordConfirmation = context.getNewPasswordConfirmation();
        String userName = context.getUserName();
        if (!maybePassword.isPresent()) {
            context.getToken().ifPresent(someToken -> context.redirectToNewPassword(someToken, null));
            return State.FINISH;
        }

        try {
            credentialService.changePassword(userName, maybePassword.get(), passwordConfirmation);
            audit.log(auditLogEventFactory.createEventForSessionForSuccess(context, PASSWORD_CHANGED));
            context.redirectToNewPasswordSuccessPage();
            return State.FINISH;
        } catch (SimbaException simbaException) {
            audit.log(auditLogEventFactory.createEventForSessionForFailure(context, PASSWORD_NOT_VALID));
            context.redirectToNewPassword(context.getToken().orElse(null), simbaException.getMessageKey().name());
            return State.FINISH;
        }
    }

    @Override
    public boolean postProcess(ChainContext context, Exception exception) {
        return false;
    }
}
