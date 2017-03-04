package boot.reactive.app.rest;

import boot.reactive.app.model.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class ProcessingController {

    /**
     * curl "http://localhost:9090/non-blocking?delay=1500"
     */
    @RequestMapping("/non-blocking")
    public Mono<Result> nonBlockingProcessingRx(@RequestParam(value = "delay") int processingTimeMs) {
        return Mono.just(Result.builder()
                .processed(true)
                .processingTimeMs(processingTimeMs)
                .build()
        )
                .delayElementMillis(processingTimeMs);
    }
}