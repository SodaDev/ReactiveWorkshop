package com.soda.workshop.reactive.rest;

import com.soda.workshop.reactive.model.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import rx.Observable;

import java.util.concurrent.TimeUnit;

@RestController
public class ProcessingController {

    /**
     * curl "http://localhost:9090/blocking?delay=1500"
     */
    @RequestMapping("/blocking")
    public Result blockingProcessing(@RequestParam(value = "delay") int processingTimeMs) throws InterruptedException {
        Thread.sleep(processingTimeMs);
        return Result.builder()
                .processed(true)
                .processingTimeMs(processingTimeMs)
                .build();
    }

    /**
     * curl "http://localhost:9090/non-blocking?delay=1500"
     */
    @RequestMapping("/non-blocking")
    public DeferredResult<Result> nonBlockingProcessing(@RequestParam(value = "delay") int processingTimeMs) {
        DeferredResult<Result> deferredResult = new DeferredResult<>();
        Observable.just(Result.builder()
                .processed(true)
                .processingTimeMs(processingTimeMs)
                .build()
        )
                .delay(processingTimeMs, TimeUnit.MILLISECONDS)
                .forEach(deferredResult::setResult, deferredResult::setErrorResult);

        return deferredResult;
    }
}