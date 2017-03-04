package com.soda.workshop.reactive.rest;

import com.soda.workshop.reactive.model.Result;
import com.soda.workshop.reactive.task.DeferredTask;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.Timer;

@RestController
public class ProcessingController {
    private Timer timer = new Timer();

    /**
     * Sample usage: curl "http://localhost:9090/blocking?delay=1500"
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
     * Sample usage: curl "http://localhost:9090/non-blocking?delay=1500"
     */
    @RequestMapping("/non-blocking")
    public DeferredResult<Result> nonBlockingProcessing(@RequestParam(value = "delay") int processingTimeMs) {
        DeferredResult<Result> deferredResult = new DeferredResult<>();
        DeferredTask task = new DeferredTask(processingTimeMs, deferredResult);

        timer.schedule(task, processingTimeMs);

        return deferredResult;
    }
}