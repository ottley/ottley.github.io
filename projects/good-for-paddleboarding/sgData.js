var currentDate = new Date();
currentDateOnly = currentDate.toISOString().split('T')[0];

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrowDateOnly = tomorrow.toISOString().split('T')[0];

var dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
dayATDateOnly = dayAfterTomorrow.toISOString().split('T')[0];

var dayAfterTomorrowFetch = new Date();
dayAfterTomorrowFetch.setDate(dayAfterTomorrowFetch.getDate() + 3);
var dayATDateOnlyFetch = dayAfterTomorrowFetch.toISOString().split('T')[0];

var lat = 50.827778;
var lng = -0.152778;

var tideCaseDay1 = "empty";
var tideHTMLDay1 = "empty";

var tideCaseDay2 = "empty";
var tideHTMLDay2 = "empty";

var tideCaseDay3 = "empty";
var tideHTMLDay3 = "empty";

var foundIndex6AMToday;
var foundIndex9AMToday;
var foundIndex12PMToday;
var foundIndex3PMToday;
var foundIndex6PMToday;
var foundIndex6AMTomorrow;
var foundIndex9AMTomorrow;
var foundIndex12PMTomorrow;
var foundIndex3PMTomorrow;
var foundIndex6PMTomorrow;
var foundIndex6AMDayAT;
var foundIndex9AMDayAT;
var foundIndex12PMDayAT; 
var foundIndex3PMDayAT;
var foundIndex6PMDayAT;

fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=` + currentDateOnly + `&end=` + dayATDateOnlyFetch, {
    headers: {
        'Authorization': 'e8f67b40-350a-11ec-83d3-0242ac130002-e8f67bae-350a-11ec-83d3-0242ac130002'
    }
}).then((response) => response.json()).then((jsonData) => {
    try {
        if (jsonData.errors.key == "API quota exceeded") {
            console.log("API quota exceeded");
            console.log(jsonData);
        }
    }
    catch (err) {
        console.log("API running");
        
        // Send tide data from API to db.php
        for (i = 0; i < jsonData.data.length; i++) {
            $.ajax({
                type: "POST",
                url: 'db.php',
                data: {
                    "submit": "yes",
                    "type": jsonData.data[i].type,
                    "time": jsonData.data[i].time
                },
                success: function(data) {
                    console.log("Attempt to add data to the db");
                }
            });
        }
    }
    // Get tide data response from db.php
    $.ajax({
        type: "POST",
        url: 'db.php',
        data: {
            "search_location": "Brighton"
        },
        success: function(data) {
            
            var unsortedArr = [];
            var sortedArr = [];
            
            // Stores data from db into an unsorted array
            unsortedArr = JSON.parse(data);
            
            // Creates an ordered collection of tide events to reference
            for (j = 2; j < unsortedArr.length; j += 3) {
                if (unsortedArr[j].includes(currentDateOnly) ||
                    unsortedArr[j].includes(tomorrowDateOnly) ||
                    unsortedArr[j].includes(dayATDateOnly)) {
                    sortedArr.push(unsortedArr[j]);
                }
            }
            sortedArr.sort();
            
            for (i = 1; i <= sortedArr.length; i++) {
                var found = unsortedArr.findIndex(element => element == sortedArr[-1 + i]);
                
                // Changes tide event string to capitilized
                if (unsortedArr[-1 + found] == "low") {
                    unsortedArr[-1 + found] = "Low";
                }
                if (unsortedArr[-1 + found] == "high") {
                    unsortedArr[-1 + found] = "High";
                }
                
                //Manipulation of tide string to obtain desired data/format
                var tideString = unsortedArr[-1 + found];
                var tideString2 = sortedArr[-1 + i];
                var tideTimeOnly = tideString2.split('T')[1];
                var pTagContent1 = tideString.split('T')[0] + " Tide";
                var pTagContent2 = tideTimeOnly.split('+')[0];
                var pTagContent3 = pTagContent2.split(':')[0] + ":" + pTagContent2.split(':')[1];
                var tideEventHTML = "<p>" + pTagContent1 + "</p><p>" + pTagContent3 + "</p><hr style='margin: 0;'>";
                
                // Sets each day it's own tide string, adding onto each previously added tide event string
                if (tideString2.includes(currentDateOnly)) {
                    if (tideCaseDay1 == "empty") {
                        tideCaseDay1 = tideString.split('T')[0].charAt(0);
                    } else {
                        tideCaseDay1 = tideCaseDay1 + tideString.split('T')[0].charAt(0);
                    }
                    if (tideHTMLDay1 == "empty") {
                        tideHTMLDay1 = tideEventHTML;
                    } else {
                        tideHTMLDay1 = tideHTMLDay1 + tideEventHTML;
                    }
                }
                if (tideString2.includes(tomorrowDateOnly)) {
                    if (tideCaseDay2 == "empty") {
                        tideCaseDay2 = tideString.split('T')[0].charAt(0);
                    } else {
                        tideCaseDay2 = tideCaseDay2 + tideString.split('T')[0].charAt(0);
                    }
                    if (tideHTMLDay2 == "empty") {
                        tideHTMLDay2 = tideEventHTML;
                    } else {
                        tideHTMLDay2 = tideHTMLDay2 + tideEventHTML;
                    }
                }
                if (tideString2.includes(dayATDateOnly)) {
                    if (tideCaseDay3 == "empty") {
                        tideCaseDay3 = tideString.split('T')[0].charAt(0);
                    } else {
                        tideCaseDay3 = tideCaseDay3 + tideString.split('T')[0].charAt(0);
                    }
                    if (tideHTMLDay3 == "empty") {
                        tideHTMLDay3 = tideEventHTML;
                    } else {
                        tideHTMLDay3 = tideHTMLDay3 + tideEventHTML;
                    }
                }
            }
        }
    });
});

// Stormglass weather data points
const params = 'waveHeight,wavePeriod,windSpeed,currentSpeed,airTemperature,precipitation,visibility';
// Stormglass API url with lat/lng, relevant days and params set
fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=` + currentDateOnly + `&end=` + dayATDateOnlyFetch, {
    headers: {
        'Authorization': 'e8f67b40-350a-11ec-83d3-0242ac130002-e8f67bae-350a-11ec-83d3-0242ac130002'
    }
}).then((response) => response.json()).then((jsonData2) => {
    try{
        if (jsonData2.errors.key == "API quota exceeded") {
            console.log("API quota exceeded");
        }
    }
    catch (err) {
        console.log("API running");
        
        //
        // Only send data to db.php if it's for Today, Tomorrow or the Day After Tomorrow
        //
        for (i = 0; i < jsonData2.hours.length; i++) {
            if ((
                    jsonData2.hours[i].time.includes(currentDateOnly) ||
                    jsonData2.hours[i].time.includes(tomorrowDateOnly) ||
                    jsonData2.hours[i].time.includes(dayATDateOnly))
                    &&
                    (jsonData2.hours[i].time.includes("T06:00:00+00:00") ||
                    jsonData2.hours[i].time.includes("T09:00:00+00:00") ||
                    jsonData2.hours[i].time.includes("T12:00:00+00:00") ||
                    jsonData2.hours[i].time.includes("T15:00:00+00:00") ||
                    jsonData2.hours[i].time.includes("T18:00:00+00:00"))
            ) {
                //
                // Send weather data to db.php
                //
                $.ajax({
                    type: "POST",
                    url: 'db.php',
                    data: {
                        "submitWeather": "yes",
                        "time": jsonData2.hours[i].time,
                        "airTemp": jsonData2.hours[i].airTemperature.sg,
                        "windSpeed": jsonData2.hours[i].windSpeed.sg,
                        "precipitation": jsonData2.hours[i].precipitation.sg,
                        "waveHeight": jsonData2.hours[i].waveHeight.sg,
                        "wavePeriod": jsonData2.hours[i].wavePeriod.sg,
                        "currentSpeed": jsonData2.hours[i].currentSpeed.sg,
                        "visibility": jsonData2.hours[i].visibility.sg
                    },
                    success: function(data) {
                        console.log("Attempt to add weather data to the db");
                    }
                });
            }
        }
    }
    //
    // Request weather data from db.php
    //
    $.ajax({
        type: "POST",
        url: 'db.php',
        data: {
            "search_locationW": "Brighton",
            "day1": currentDateOnly,
            "day2": tomorrowDateOnly,
            "day3": dayATDateOnly,
            
        },
        success: function(data) {
             
            unsortedArr2 = JSON.parse(data);
            
            // Index found for 6AM-9AM-12PM-3PM-6PM for each day
            //
            // Today
            foundIndex6AMToday = unsortedArr2.lastIndexOf((currentDateOnly+"T06:00:00+00:00"));
            foundIndex9AMToday = unsortedArr2.lastIndexOf((currentDateOnly+"T09:00:00+00:00"));
            foundIndex12PMToday = unsortedArr2.lastIndexOf((currentDateOnly+"T12:00:00+00:00"));
            foundIndex3PMToday = unsortedArr2.lastIndexOf((currentDateOnly+"T15:00:00+00:00"));
            foundIndex6PMToday = unsortedArr2.lastIndexOf((currentDateOnly+"T18:00:00+00:00"));
            // Tomorrow
            foundIndex6AMTomorrow = unsortedArr2.lastIndexOf((tomorrowDateOnly+"T06:00:00+00:00"));
            foundIndex9AMTomorrow = unsortedArr2.lastIndexOf((tomorrowDateOnly+"T09:00:00+00:00"));
            foundIndex12PMTomorrow = unsortedArr2.lastIndexOf((tomorrowDateOnly+"T12:00:00+00:00"));
            foundIndex3PMTomorrow = unsortedArr2.lastIndexOf((tomorrowDateOnly+"T15:00:00+00:00"));
            foundIndex6PMTomorrow = unsortedArr2.lastIndexOf((tomorrowDateOnly+"T18:00:00+00:00"));
            // Day After Tomorrow
            foundIndex6AMDayAT = unsortedArr2.lastIndexOf((dayATDateOnly+"T06:00:00+00:00"));
            foundIndex9AMDayAT = unsortedArr2.lastIndexOf((dayATDateOnly+"T09:00:00+00:00"));
            foundIndex12PMDayAT = unsortedArr2.lastIndexOf((dayATDateOnly+"T12:00:00+00:00"));
            foundIndex3PMDayAT = unsortedArr2.lastIndexOf((dayATDateOnly+"T15:00:00+00:00"));
            foundIndex6PMDayAT = unsortedArr2.lastIndexOf((dayATDateOnly+"T18:00:00+00:00"));
            
        }
    
});
    
    
    
});
