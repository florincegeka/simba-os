package org.simbasecurity.core.service.communication.reset.password;

import org.simbasecurity.core.domain.User;
import org.simbasecurity.core.domain.communication.token.Token;
import org.simbasecurity.core.service.communication.mail.LinkGenerator;
import org.simbasecurity.core.service.communication.mail.Mail;
import org.simbasecurity.core.service.communication.mail.MailService;
import org.simbasecurity.core.service.communication.token.UserTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URL;

import static org.simbasecurity.core.domain.user.EmailAddress.email;
import static org.simbasecurity.core.service.communication.mail.Mail.mail;

@Transactional
@Service
public class ResetPasswordService {

    private static final String RESET_PASSWORD_SUBJECT = "reset password";

    @Autowired
    private MailService mailService;
    @Autowired
    private UserTokenService tokenManager;
    @Autowired
    private LinkGenerator linkGenerator;
    @Autowired
    private ResetPasswordTemplateService templateService;

    @Value("${simba.smtp.mail.from}")
    private String resetPasswordFromAddress;

    public void sendResetPasswordMessageTo(User user, ResetPasswordReason reason) {
        Token token = tokenManager.generateToken(user);
        URL link = linkGenerator.generateResetPasswordLink(token);

        String mailBody = templateService.createMailBody(reason, user.getLanguage(), link.toString());
        mailService.sendMail(createMail(user, mailBody));
    }

    private Mail createMail(User user, String body) {
        return mail()
                .from(email(resetPasswordFromAddress))
                .to(user.getEmail())
                .subject(RESET_PASSWORD_SUBJECT)
                .body(body);
    }
}