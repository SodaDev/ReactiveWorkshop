var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "23550",
        "ko": "76450"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59915",
        "ok": "59915",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1286",
        "ok": "5462",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6115",
        "ok": "11661",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "436",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "728",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1097",
        "ok": "36848",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37733",
        "ok": "46475",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17978,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 653,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4919,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 76450,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "862.069",
        "ok": "203.017",
        "ko": "659.052"
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
        "total": "100000",
        "ok": "23550",
        "ko": "76450"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59915",
        "ok": "59915",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1286",
        "ok": "5462",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6115",
        "ok": "11661",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "435",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "728",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1097",
        "ok": "36851",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37733",
        "ok": "46475",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17978,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 653,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4919,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 76450,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "862.069",
        "ok": "203.017",
        "ko": "659.052"
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
