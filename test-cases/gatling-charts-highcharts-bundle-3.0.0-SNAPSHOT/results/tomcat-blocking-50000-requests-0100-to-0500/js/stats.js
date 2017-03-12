var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "31108",
        "ko": "18892"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59989",
        "ok": "59989",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3948",
        "ok": "6346",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11764",
        "ok": "14396",
        "ko": "0"
    },
    "percentiles1": {
        "total": "219",
        "ok": "394",
        "ko": "0"
    },
    "percentiles2": {
        "total": "453",
        "ok": "799",
        "ko": "0"
    },
    "percentiles3": {
        "total": "37057",
        "ok": "44856",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56742",
        "ok": "58397",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23326,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1662,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6120,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 18892,
        "percentage": 38
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "420.168",
        "ok": "261.412",
        "ko": "158.756"
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
        "ok": "31108",
        "ko": "18892"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59989",
        "ok": "59989",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3948",
        "ok": "6346",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11764",
        "ok": "14396",
        "ko": "0"
    },
    "percentiles1": {
        "total": "219",
        "ok": "394",
        "ko": "0"
    },
    "percentiles2": {
        "total": "453",
        "ok": "799",
        "ko": "0"
    },
    "percentiles3": {
        "total": "37057",
        "ok": "44856",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56742",
        "ok": "58397",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23326,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1662,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6120,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 18892,
        "percentage": 38
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "420.168",
        "ok": "261.412",
        "ko": "158.756"
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
