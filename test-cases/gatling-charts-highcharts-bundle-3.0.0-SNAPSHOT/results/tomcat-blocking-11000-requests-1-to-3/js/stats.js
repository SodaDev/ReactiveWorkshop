var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "361008",
        "ok": "206375",
        "ko": "154633"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1002",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "35642",
        "ok": "35642",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9157",
        "ok": "16018",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8595",
        "ok": "4397",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10363",
        "ok": "17692",
        "ko": "0"
    },
    "percentiles2": {
        "total": "17855",
        "ok": "18343",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18770",
        "ok": "18870",
        "ko": "0"
    },
    "percentiles4": {
        "total": "18977",
        "ok": "19013",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 454,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 205921,
        "percentage": 57
    },
    "group4": {
        "name": "failed",
        "count": 154633,
        "percentage": 43
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "853.447",
        "ok": "487.884",
        "ko": "365.563"
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
        "total": "361008",
        "ok": "206375",
        "ko": "154633"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1002",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "35642",
        "ok": "35642",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9157",
        "ok": "16018",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8595",
        "ok": "4397",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10363",
        "ok": "17692",
        "ko": "0"
    },
    "percentiles2": {
        "total": "17855",
        "ok": "18342",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18770",
        "ok": "18870",
        "ko": "0"
    },
    "percentiles4": {
        "total": "18977",
        "ok": "19013",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 454,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 205921,
        "percentage": 57
    },
    "group4": {
        "name": "failed",
        "count": 154633,
        "percentage": 43
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "853.447",
        "ok": "487.884",
        "ko": "365.563"
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
