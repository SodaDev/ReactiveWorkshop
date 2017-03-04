package com.soda.workshop.reactive.task;

import com.soda.workshop.reactive.model.Result;
import javaslang.control.Try;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.TimerTask;

public class DeferredTask extends TimerTask {
    private static final Logger LOG = LoggerFactory.getLogger(DeferredTask.class);

    private DeferredResult<Result> deferredResult;
    private int processingTimeMs;

    public DeferredTask(int processingTimeMs, DeferredResult<Result> deferredResult) {
        this.processingTimeMs = processingTimeMs;
        this.deferredResult = deferredResult;
    }

    @Override
    public void run() {
        if (deferredResult.isSetOrExpired()) {
            LOG.warn("Deferred processing expired");
        } else {
            Try.of(() -> deferredResult.setResult(Result.builder()
                    .processed(true)
                    .processingTimeMs(processingTimeMs).build())
            ).andThen(result -> LOG.debug("Deferred processing done with result {}", result));
        }
    }
}