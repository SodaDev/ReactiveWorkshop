
import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import scala.util.Random

class NonBlockingShoppingSimulation extends Simulation {
  val minWaitMs = 1000 milliseconds
  val maxWaitMs = 3000 milliseconds
  val rampUpTimeSecs = 60
  val testTimeSecs = 360
  val noOfUsers = 10000

  val httpProtocol = http
    .baseURL("http://localhost:9090")
    .inferHtmlResources(WhiteList(), BlackList())
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .upgradeInsecureRequestsHeader("1")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0")

  def nextDelay() = minWaitMs.toMillis + Random.nextDouble() * (maxWaitMs.toMillis - minWaitMs.toMillis);

  val requestScenario = scenario("NonBlockingRecordedSimulation")
    .during(testTimeSecs) {
      exec(
        http("process_request")
          .get("/non-blocking")
          .queryParam("delay", _ => nextDelay().toInt)
          .check(status.is(200)))
        .pause(minWaitMs, maxWaitMs)
    }

  setUp(requestScenario.inject(
    rampUsers(noOfUsers) over (rampUpTimeSecs seconds)
  )).protocols(httpProtocol)
}