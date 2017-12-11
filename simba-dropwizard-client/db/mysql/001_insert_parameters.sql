Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('APPLICATION_NAME','SIMBA Zoo Manager');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_LIFE_TIME','90');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_MAX_LENGTH','15');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_MIN_LENGTH','6');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_VALID_CHARACTERS','[\x21-\x7E]*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_COMPLEXITY_RULE','.*[A-Z].*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_COMPLEXITY_RULE','.*[a-z].*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_COMPLEXITY_RULE','.*[0-9].*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_COMPLEXITY_RULE','.*[\W_].*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_MINIMUM_COMPLEXITY','3');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_CHANGE_REQUIRED','true');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('INVALID_LOGIN_MAX_COUNT','5');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('CACHING_ENABLED','false');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('LOGIN_URL','/jsp/login.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('LOGOUT_URL','/jsp/logout.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('PASSWORD_CHANGED_URL','/jsp/passwordchanged.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('ACCESS_DENIED_URL','/jsp/access-denied.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('CHANGE_PASSWORD_URL','/jsp/changepassword.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('SUCCESS_URL','/simba-zoo/index.jsp');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('SUCCESSURL_MAX_LENGTH','250');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('SESSION_TIME_OUT','30');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('USERNAME_MAX_LENGTH','15');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('USERNAME_MIN_LENGTH','3');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('USERNAME_REGEX','\w*');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('FIRSTNAME_MAX_LENGTH','20');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('FIRSTNAME_MIN_LENGTH','1');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('LASTNAME_MAX_LENGTH','30');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('LASTNAME_MIN_LENGTH','1');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('KEYSTORE_JVM_ARG','simbaKeystore');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('KEYSTORE_ALIAS','simbaalias');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('KEYSTORE_PASSWORD','password');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('AUDIT_LOG_INTEGRITY_ENABLED','true');
INSERT INTO SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) VALUES('EXPIRED_URL', '/jsp/expired.jsp');
INSERT INTO SIMBA_PARAMETER VALUES('MAX_LOGIN_ELAPSED_TIME', '2');
Insert into SIMBA_PARAMETER (PARAMETER_KEY,PARAMETER_VALUE) values ('ENABLE_AD_GROUPS','false');