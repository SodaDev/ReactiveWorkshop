var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "125000",
        "ok": "15357",
        "ko": "109643"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "104",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60027",
        "ok": "60027",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "763",
        "ok": "6207",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5219",
        "ok": "13710",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "554",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "2235",
        "ko": "0"
    },
    "percentiles3": {
        "total": "956",
        "ok": "45983",
        "ko": "0"
    },
    "percentiles4": {
        "total": "31195",
        "ok": "56848",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8590,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1364,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5403,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 109643,
        "percentage": 88
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1213.592",
        "ok": "149.097",
        "ko": "1064.495"
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
        "total": "125000",
        "ok": "15357",
        "ko": "109643"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "104",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60027",
        "ok": "60027",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "763",
        "ok": "6207",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5219",
        "ok": "13710",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "554",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "2236",
        "ko": "0"
    },
    "percentiles3": {
        "total": "956",
        "ok": "45983",
        "ko": "0"
    },
    "percentiles4": {
        "total": "31195",
        "ok": "56848",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8590,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1364,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5403,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 109643,
        "percentage": 88
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1213.592",
        "ok": "149.097",
        "ko": "1064.495"
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
