(function () {
    "use strict";
    var key = "",
        goldURL = "http://www.quandl.com/api/v1/datasets/LBMA/GOLD.json" + key,
        goldID = "gold-price",
        silverURL = "http://www.quandl.com/api/v1/datasets/LBMA/SILVER.json" + key,
        silverID = "silver-price",
        platinumURL = "http://www.quandl.com/api/v1/datasets/LPPM/PLAT.json" + key,
        platinumID = "platinum-price",
        palladiumURL = "http://www.quandl.com/api/v1/datasets/LPPM/PALL.json" + key,
        palladiumID = "palladium-price",
        getPrice = function (url, id) {
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.overrideMimeType("application/json");
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status === 200) {
                        var a = JSON.parse(xmlhttp.responseText);
                        document.getElementById(id).innerHTML = "$" + a.data[0][1];
                        document.getElementById("status").innerHTML = "Last updated: " + a.data[0][0];
                    } else {
                        document.getElementById("status").innerHTML = "An error occurred";
                    }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        };
    getPrice(goldURL, goldID);
    getPrice(silverURL, silverID);
    getPrice(platinumURL, platinumID);
    getPrice(palladiumURL, palladiumID);
}());