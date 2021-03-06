package org.simbasecurity.core.service.errors;

import org.simbasecurity.api.service.thrift.TSimbaError;
import org.simbasecurity.core.exception.SimbaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SimbaExceptionHandlingCaller {

    private static final Logger logger = LoggerFactory.getLogger(SimbaExceptionHandlingCaller.class);

    private SimbaExceptionThriftHandler handler;

    @Autowired
    public SimbaExceptionHandlingCaller(SimbaExceptionThriftHandler handler) {
        this.handler = handler;
    }

    public <R> R call(SimbaExceptionThrowingInvocation<R> o) throws TSimbaError {
        try {
            return o.invoke();
        } catch(SimbaException e) {
            logger.error(e.getMessage(), e);
            throw handler.handle(e);
        }
    }

    public void call(SimbaExceptionThrowingVoidInvocation o) throws TSimbaError {
        try {
            o.invoke();
        } catch(SimbaException e) {
            logger.error(e.getMessage(), e);
            throw handler.handle(e);
        }
    }

    @FunctionalInterface
    public interface SimbaExceptionThrowingInvocation<R> {
        R invoke() throws SimbaException;
    }

    @FunctionalInterface
    public interface SimbaExceptionThrowingVoidInvocation<R> {
        void invoke() throws SimbaException;
    }
}
