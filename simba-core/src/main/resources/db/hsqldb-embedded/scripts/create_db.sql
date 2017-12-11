CREATE SEQUENCE SEQ_SIMBA_CONDITION START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_EXCLUDED_RESOURCE START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_GROUP START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_POLICY START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_ROLE START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_RULE START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_USER START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_SIMBA_USER_TOKEN START WITH 1 INCREMENT BY 1;

CREATE TABLE SIMBA_ARCHIVED_AUDIT_LOG (TIME_STAMP BIGINT, USERNAME VARCHAR(255), SSOTOKEN VARCHAR(255), REMOTE_IP VARCHAR(255), MESSAGE VARCHAR(512), NAME VARCHAR(255), FIRSTNAME VARCHAR(255), USERAGENT VARCHAR(255), HOSTSERVERNAME VARCHAR(255), EVENTCATEGORY VARCHAR(255), DIGEST VARCHAR(255), REQUESTURL VARCHAR(255), CHAINID VARCHAR(255));
CREATE TABLE SIMBA_ARCHIVED_SESSION (CLIENTIPADDRESS VARCHAR(255), CREATIONTIME BIGINT, LASTACCESSTIME BIGINT, SSOTOKEN VARCHAR(255), USER_ID BIGINT, HOSTSERVERNAME VARCHAR(255));
CREATE TABLE SIMBA_AUDIT_LOG (TIME_STAMP BIGINT, USERNAME VARCHAR(255), SSOTOKEN VARCHAR(255), REMOTE_IP VARCHAR(255), MESSAGE VARCHAR(512), NAME VARCHAR(255), FIRSTNAME VARCHAR(255), USERAGENT VARCHAR(255), HOSTSERVERNAME VARCHAR(255), EVENTCATEGORY VARCHAR(255), DIGEST VARCHAR(255), REQUESTURL VARCHAR(255), CHAINID VARCHAR(255));

CREATE TABLE SIMBA_CONDITION (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT, NAME VARCHAR(255));
CREATE TABLE SIMBA_CONDITION_USER (CONDITION_ID BIGINT, USER_ID BIGINT);
CREATE TABLE SIMBA_EXCLUDED_RESOURCE (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT, PATTERN VARCHAR(255), LOGGING_EXCLUDED BOOLEAN default FALSE);
CREATE TABLE SIMBA_PARAMETER (PARAMETER_KEY VARCHAR(255), PARAMETER_VALUE VARCHAR(255));
CREATE TABLE SIMBA_POLICY (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT NOT NULL, NAME VARCHAR(255));
CREATE TABLE SIMBA_POLICY_CONDITION (POLICY_ID BIGINT, CONDITION_ID BIGINT);
CREATE TABLE SIMBA_POLICY_SIMBA_ROLE (POLICY_ID BIGINT NOT NULL, ROLE_ID BIGINT NOT NULL);

CREATE TABLE SIMBA_RULE (ID BIGINT PRIMARY KEY NOT NULL, RESOURCENAME VARCHAR(255), VERSION BIGINT NOT NULL, NAME VARCHAR(255), RULE_TYPE VARCHAR(16) NOT NULL, POLICY_ID BIGINT, GET_ALLOWED INTEGER DEFAULT 0 NOT NULL, POST_ALLOWED INTEGER DEFAULT 0 NOT NULL, PUT_ALLOWED INTEGER DEFAULT 0 NOT NULL, CREATE_ALLOWED INTEGER DEFAULT 0 NOT NULL, DELETE_ALLOWED INTEGER DEFAULT 0 NOT NULL, READ_ALLOWED INTEGER DEFAULT 0 NOT NULL, WRITE_ALLOWED INTEGER DEFAULT 0 NOT NULL);
CREATE TABLE SIMBA_ROLE (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT NOT NULL, NAME VARCHAR(255));
CREATE TABLE SIMBA_SESSION (CLIENTIPADDRESS VARCHAR(255), CREATIONTIME BIGINT, LASTACCESSTIME BIGINT, SSOTOKEN VARCHAR(255) PRIMARY KEY NOT NULL, USER_ID BIGINT, HOSTSERVERNAME VARCHAR(255) DEFAULT '<UNKNOWN>');
CREATE TABLE SIMBA_TIME_CONDITION (CONDITION_ID BIGINT, START_EXPR VARCHAR(120), END_EXPR VARCHAR(120));

CREATE TABLE SIMBA_USER (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT NOT NULL, CHANGEPASSWORDONNEXTLOGON INTEGER NOT NULL, DATEOFLASTPASSWORDCHANGE TIMESTAMP NOT NULL, FIRSTNAME VARCHAR(255), INACTIVEDATE TIMESTAMP, INVALIDLOGINCOUNT BIGINT NOT NULL, LANGUAGE VARCHAR(255), NAME VARCHAR(255), PASSWORD VARCHAR(255) NOT NULL, PASSWORDCHANGEREQUIRED INTEGER NOT NULL, STATUS VARCHAR(255), SUCCESSURL VARCHAR(255), USERNAME VARCHAR(255), DATABASELOGINBLOCKED INTEGER DEFAULT 0, EMAIL VARCHAR(255));
CREATE TABLE SIMBA_USER_ROLE (USER_ID BIGINT NOT NULL, ROLE_ID BIGINT NOT NULL);
CREATE TABLE SIMBA_LOGIN_MAPPING(TOKEN VARCHAR(255) PRIMARY KEY NOT NULL, TARGETURL VARCHAR(1024) NOT NULL, CREATIONTIME BIGINT NOT NULL);
CREATE TABLE SIMBA_SSO_TOKEN_MAPPING(TOKEN VARCHAR(255) PRIMARY KEY NOT NULL, SSOTOKEN VARCHAR(255) NOT NULL, CREATIONTIME BIGINT NOT NULL);
CREATE TABLE SIMBA_GROUP (ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT NOT NULL, NAME VARCHAR(255) NOT NULL, CN VARCHAR(1024) NOT NULL);
CREATE TABLE SIMBA_USER_GROUP(USER_ID BIGINT, GROUP_ID BIGINT NOT NULL,PRIMARY KEY(USER_ID,GROUP_ID),CONSTRAINT USER_GROUP_LINK FOREIGN KEY(GROUP_ID) REFERENCES SIMBA_GROUP(ID),CONSTRAINT USER_GROUP_LINK2 FOREIGN KEY(USER_ID) REFERENCES SIMBA_USER(ID));
CREATE TABLE SIMBA_GROUP_ROLE(GROUP_ID BIGINT, ROLE_ID BIGINT NOT NULL,PRIMARY KEY(GROUP_ID,ROLE_ID),CONSTRAINT GROUP_ROLE_LINK FOREIGN KEY(ROLE_ID) REFERENCES SIMBA_ROLE(ID),CONSTRAINT GROUP_ROLE_LINK2 FOREIGN KEY(GROUP_ID) REFERENCES SIMBA_GROUP(ID));
CREATE TABLE SIMBA_USER_TOKEN(ID BIGINT PRIMARY KEY NOT NULL, VERSION BIGINT NOT NULL, CLASS VARCHAR(255) NOT NULL, TOKEN VARCHAR(255) UNIQUE NOT NULL, SIMBA_USER_ID BIGINT UNIQUE NOT NULL, EXPIRES_ON TIMESTAMP NOT NULL);



CREATE TABLE qrtz_job_details ( SCHED_NAME VARCHAR(120) NOT NULL, JOB_NAME VARCHAR(200) NOT NULL, JOB_GROUP VARCHAR(200) NOT NULL, DESCRIPTION VARCHAR(250) NULL, JOB_CLASS_NAME VARCHAR(250) NOT NULL, IS_DURABLE BOOLEAN NOT NULL, IS_NONCONCURRENT BOOLEAN NOT NULL, IS_UPDATE_DATA BOOLEAN NOT NULL, REQUESTS_RECOVERY BOOLEAN NOT NULL, JOB_DATA BLOB NULL, PRIMARY KEY (SCHED_NAME,JOB_NAME,JOB_GROUP) );
CREATE TABLE qrtz_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, JOB_NAME VARCHAR(200) NOT NULL, JOB_GROUP VARCHAR(200) NOT NULL, DESCRIPTION VARCHAR(250) NULL, NEXT_FIRE_TIME NUMERIC(13) NULL, PREV_FIRE_TIME NUMERIC(13) NULL, PRIORITY INTEGER NULL, TRIGGER_STATE VARCHAR(16) NOT NULL, TRIGGER_TYPE VARCHAR(8) NOT NULL, START_TIME NUMERIC(13) NOT NULL, END_TIME NUMERIC(13) NULL, CALENDAR_NAME VARCHAR(200) NULL, MISFIRE_INSTR NUMERIC(2) NULL, JOB_DATA BLOB NULL, PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP), FOREIGN KEY (SCHED_NAME,JOB_NAME,JOB_GROUP) REFERENCES QRTZ_JOB_DETAILS(SCHED_NAME,JOB_NAME,JOB_GROUP) );
CREATE TABLE qrtz_simple_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, REPEAT_COUNT NUMERIC(7) NOT NULL, REPEAT_INTERVAL NUMERIC(12) NOT NULL, TIMES_TRIGGERED NUMERIC(10) NOT NULL, PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP), FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) );
CREATE TABLE qrtz_cron_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, CRON_EXPRESSION VARCHAR(120) NOT NULL, TIME_ZONE_ID VARCHAR(80), PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP), FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) );
CREATE TABLE qrtz_simprop_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, STR_PROP_1 VARCHAR(512) NULL, STR_PROP_2 VARCHAR(512) NULL, STR_PROP_3 VARCHAR(512) NULL, INT_PROP_1 NUMERIC(9) NULL, INT_PROP_2 NUMERIC(9) NULL, LONG_PROP_1 NUMERIC(13) NULL, LONG_PROP_2 NUMERIC(13) NULL, DEC_PROP_1 NUMERIC(13,4) NULL, DEC_PROP_2 NUMERIC(13,4) NULL, BOOL_PROP_1 BOOLEAN NULL, BOOL_PROP_2 BOOLEAN NULL, PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP), FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) );
CREATE TABLE qrtz_blob_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, BLOB_DATA BLOB NULL, PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP), FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP) );
CREATE TABLE qrtz_calendars ( SCHED_NAME VARCHAR(120) NOT NULL, CALENDAR_NAME VARCHAR(200) NOT NULL, CALENDAR BLOB NOT NULL, PRIMARY KEY (SCHED_NAME,CALENDAR_NAME) );
CREATE TABLE qrtz_paused_trigger_grps ( SCHED_NAME VARCHAR(120) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, PRIMARY KEY (SCHED_NAME,TRIGGER_GROUP) );
CREATE TABLE qrtz_fired_triggers ( SCHED_NAME VARCHAR(120) NOT NULL, ENTRY_ID VARCHAR(95) NOT NULL, TRIGGER_NAME VARCHAR(200) NOT NULL, TRIGGER_GROUP VARCHAR(200) NOT NULL, INSTANCE_NAME VARCHAR(200) NOT NULL, FIRED_TIME NUMERIC(13) NOT NULL, SCHED_TIME NUMERIC(13) NOT NULL, PRIORITY INTEGER NOT NULL, STATE VARCHAR(16) NOT NULL, JOB_NAME VARCHAR(200) NULL, JOB_GROUP VARCHAR(200) NULL, IS_NONCONCURRENT BOOLEAN NULL, REQUESTS_RECOVERY BOOLEAN NULL, PRIMARY KEY (SCHED_NAME,ENTRY_ID) );
CREATE TABLE qrtz_scheduler_state ( SCHED_NAME VARCHAR(120) NOT NULL, INSTANCE_NAME VARCHAR(200) NOT NULL, LAST_CHECKIN_TIME NUMERIC(13) NOT NULL, CHECKIN_INTERVAL NUMERIC(13) NOT NULL, PRIMARY KEY (SCHED_NAME,INSTANCE_NAME) );
CREATE TABLE qrtz_locks ( SCHED_NAME VARCHAR(120) NOT NULL, LOCK_NAME VARCHAR(40) NOT NULL, PRIMARY KEY (SCHED_NAME,LOCK_NAME) );


CREATE UNIQUE INDEX SYS_C004425 ON SIMBA_RULE (NAME);
CREATE UNIQUE INDEX SYS_C004426 ON SIMBA_RULE (ID);

ALTER TABLE SIMBA_RULE ADD UNIQUE (NAME);
ALTER TABLE SIMBA_RULE ADD CONSTRAINT FK30A4161F1B037BE2F4496ED5 FOREIGN KEY (POLICY_ID) REFERENCES SIMBA_POLICY (ID);

CREATE UNIQUE INDEX SYS_C004386 ON SIMBA_POLICY (NAME);
CREATE UNIQUE INDEX SYS_C004387 ON SIMBA_POLICY (ID);
ALTER TABLE SIMBA_POLICY ADD UNIQUE (NAME);

CREATE UNIQUE INDEX SYS_C004421 ON SIMBA_ROLE (NAME);
CREATE UNIQUE INDEX SYS_C004422 ON SIMBA_ROLE (ID);
ALTER TABLE SIMBA_ROLE ADD UNIQUE (NAME);

CREATE UNIQUE INDEX SYS_C004398 ON SIMBA_USER (USERNAME);
CREATE UNIQUE INDEX SYS_C004399 ON SIMBA_USER (ID);
ALTER TABLE SIMBA_USER ADD UNIQUE (USERNAME);


CREATE UNIQUE INDEX SYS_C004410 ON SIMBA_POLICY_SIMBA_ROLE (POLICY_ID, ROLE_ID);


ALTER TABLE SIMBA_POLICY_SIMBA_ROLE ADD CONSTRAINT FK287374431B037BE2 FOREIGN KEY (POLICY_ID)
REFERENCES SIMBA_POLICY (ID);
ALTER TABLE SIMBA_POLICY_SIMBA_ROLE ADD CONSTRAINT FK28737443BC8FF7A2 FOREIGN KEY (ROLE_ID)
REFERENCES SIMBA_ROLE (ID);

CREATE UNIQUE INDEX SYS_C004407 ON SIMBA_USER_ROLE (USER_ID, ROLE_ID);
ALTER TABLE SIMBA_USER_ROLE ADD PRIMARY KEY (USER_ID, ROLE_ID);

ALTER TABLE SIMBA_USER_ROLE ADD CONSTRAINT FK7500DAA1683027C2 FOREIGN KEY (USER_ID)
REFERENCES SIMBA_USER (ID);
ALTER TABLE SIMBA_USER_ROLE ADD CONSTRAINT FK7500DAA1BC8FF7A2 FOREIGN KEY (ROLE_ID)
REFERENCES SIMBA_ROLE (ID);

