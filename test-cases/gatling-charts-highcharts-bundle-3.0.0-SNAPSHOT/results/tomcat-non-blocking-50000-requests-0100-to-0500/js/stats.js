var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "30155",
        "ko": "19845"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "103",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59991",
        "ok": "59991",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3881",
        "ok": "6435",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11591",
        "ok": "14365",
        "ko": "0"
    },
    "percentiles1": {
        "total": "209",
        "ok": "401",
        "ko": "0"
    },
    "percentiles2": {
        "total": "452",
        "ok": "776",
        "ko": "0"
    },
    "percentiles3": {
        "total": "37633",
        "ok": "44929",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54863",
        "ok": "56964",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22748,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1404,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6003,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 19845,
        "percentage": 40
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "423.729",
        "ok": "255.551",
        "ko": "168.178"
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
        "total": "50000",
        "ok": "30155",
        "ko": "19845"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "103",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59991",
        "ok": "59991",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3881",
        "ok": "6435",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11591",
        "ok": "14365",
        "ko": "0"
    },
    "percentiles1": {
        "total": "211",
        "ok": "402",
        "ko": "0"
    },
    "percentiles2": {
        "total": "452",
        "ok": "776",
        "ko": "0"
    },
    "percentiles3": {
        "total": "37633",
        "ok": "44929",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54863",
        "ok": "56964",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22748,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1404,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6003,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 19845,
        "percentage": 40
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "423.729",
        "ok": "255.551",
        "ko": "168.178"
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
