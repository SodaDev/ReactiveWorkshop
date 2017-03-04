package boot.reactive.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class Result {
    private boolean processed;
    private int processingTimeMs = -1;
}