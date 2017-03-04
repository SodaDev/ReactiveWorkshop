package boot.reactive.app;

import boot.reactive.app.model.Result;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.server.reactive.HttpHandler;
import org.springframework.http.server.reactive.ReactorHttpHandlerAdapter;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import reactor.ipc.netty.http.server.HttpServer;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;

@EnableWebFlux
@EnableAutoConfiguration
@SpringBootApplication
public class BootReactiveApplication {

    public static void main(String[] args) {
        System.setProperty("reactor.ipc.netty.pool.maxConnections", Integer.toString(32));
        SpringApplication.run(BootReactiveApplication.class, args);
//        initializeFunctionally();
    }

    private static void initializeFunctionally() {
        RouterFunction<?> route = RouterFunctions
                .route(GET("/non-blocking"),
                request -> ServerResponse.ok()
                        .body(Mono.just(Result.builder()
                                .processed(true)
                                .processingTimeMs(loadMillisFromRequest(request))
                                .build())
                                .delayElementMillis(loadMillisFromRequest(request)), Result.class)
        );
        HttpHandler httpHandler = RouterFunctions.toHttpHandler(route);

        ReactorHttpHandlerAdapter adapter = new ReactorHttpHandlerAdapter(httpHandler);
        HttpServer server = HttpServer.create("localhost", 9090);
        server.newHandler(adapter).block();
    }

    private static int loadMillisFromRequest(ServerRequest request) {
        return request.queryParam("delay")
                .map(Integer::parseInt)
                .orElseThrow(RuntimeException::new);
    }


}
