var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "125000",
        "ok": "8502",
        "ko": "116498"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "107",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53272",
        "ok": "53272",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "468",
        "ok": "6876",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4153",
        "ok": "14473",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "718",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "1435",
        "ko": "0"
    },
    "percentiles3": {
        "total": "430",
        "ok": "50583",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20215",
        "ok": "52935",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4562,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1332,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2608,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 116498,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1041.667",
        "ok": "70.85",
        "ko": "970.817"
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
        "ok": "8502",
        "ko": "116498"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "107",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53272",
        "ok": "53272",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "468",
        "ok": "6876",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4153",
        "ok": "14473",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "717",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "1435",
        "ko": "0"
    },
    "percentiles3": {
        "total": "429",
        "ok": "50583",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20216",
        "ok": "52935",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4562,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1332,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2608,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 116498,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1041.667",
        "ok": "70.85",
        "ko": "970.817"
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
