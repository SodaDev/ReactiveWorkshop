var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "125000",
        "ok": "96874",
        "ko": "28126"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "104",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "60001",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1335",
        "ok": "1722",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6368",
        "ok": "7187",
        "ko": "0"
    },
    "percentiles1": {
        "total": "295",
        "ok": "359",
        "ko": "0"
    },
    "percentiles2": {
        "total": "437",
        "ok": "468",
        "ko": "0"
    },
    "percentiles3": {
        "total": "984",
        "ok": "1702",
        "ko": "0"
    },
    "percentiles4": {
        "total": "42859",
        "ok": "45436",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 89955,
        "percentage": 72
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1367,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5552,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 28126,
        "percentage": 23
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1041.667",
        "ok": "807.283",
        "ko": "234.383"
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
        "ok": "96874",
        "ko": "28126"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "104",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "60001",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1335",
        "ok": "1722",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6368",
        "ok": "7187",
        "ko": "0"
    },
    "percentiles1": {
        "total": "295",
        "ok": "359",
        "ko": "0"
    },
    "percentiles2": {
        "total": "437",
        "ok": "468",
        "ko": "0"
    },
    "percentiles3": {
        "total": "984",
        "ok": "1704",
        "ko": "0"
    },
    "percentiles4": {
        "total": "42859",
        "ok": "45436",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 89955,
        "percentage": 72
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1367,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5552,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 28126,
        "percentage": 23
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1041.667",
        "ok": "807.283",
        "ko": "234.383"
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
