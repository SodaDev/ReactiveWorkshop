var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "204639",
        "ok": "204639",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19228",
        "ok": "19228",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15901",
        "ok": "15901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4556",
        "ok": "4556",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17719",
        "ok": "17719",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18378",
        "ok": "18378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18907",
        "ok": "18908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19050",
        "ok": "19050",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 556,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 204083,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "483.78",
        "ok": "483.78",
        "ko": "-"
    }
},
contents: {
"req_process-request-6cd14": {
        type: "REQUEST",
        name: "process_request",
path: "process_request",
pathFormatted: "req_process-request-6cd14",
stats: {
    "name": "process_request",
    "numberOfRequests": {
        "total": "204639",
        "ok": "204639",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19228",
        "ok": "19228",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15901",
        "ok": "15901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4556",
        "ok": "4556",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17719",
        "ok": "17719",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18378",
        "ok": "18378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18908",
        "ok": "18908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19050",
        "ok": "19050",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 556,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 204083,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "483.78",
        "ok": "483.78",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
