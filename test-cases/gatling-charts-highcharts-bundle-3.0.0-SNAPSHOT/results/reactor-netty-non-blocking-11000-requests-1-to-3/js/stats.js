var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1064248",
        "ok": "926274",
        "ko": "137974"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1000",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3334",
        "ok": "3334",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1743",
        "ok": "2003",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "862",
        "ok": "578",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1854",
        "ok": "2003",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2428",
        "ok": "2503",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2888",
        "ok": "2903",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2980",
        "ok": "2983",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 91347,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 834927,
        "percentage": 78
    },
    "group4": {
        "name": "failed",
        "count": 137974,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2515.953",
        "ok": "2189.773",
        "ko": "326.18"
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
        "total": "1064248",
        "ok": "926274",
        "ko": "137974"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1000",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3334",
        "ok": "3334",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1743",
        "ok": "2003",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "862",
        "ok": "578",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1854",
        "ok": "2003",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2428",
        "ok": "2503",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2888",
        "ok": "2903",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2980",
        "ok": "2983",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 91347,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 834927,
        "percentage": 78
    },
    "group4": {
        "name": "failed",
        "count": 137974,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2515.953",
        "ok": "2189.773",
        "ko": "326.18"
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
