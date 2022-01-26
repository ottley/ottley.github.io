function buttonToggle(a,b,c,d,e){
    document.getElementById(a).classList.add("is-hovered");
    document.getElementById(b).classList.remove("is-hovered");
    document.getElementById(c).classList.remove("is-hovered");
                
    if(d != null){
        document.getElementById(d).classList.remove("is-hovered");
    }
    
    if(e != null){
        document.getElementById(e).classList.remove("is-hovered");
    }
}
            
function tideHTMLSet(a){
    document.getElementById('tideTextDesk').innerHTML = a;
    document.getElementById('tideTextMob').innerHTML = a;
}

function tideImgEvent(a){
    if(a == "HLH"){
        document.getElementById("tideImgDesk").src = "images/hlhTides.png";
        document.getElementById("tideImgMob").src = "images/hlhTides.png";
    }
    if(a == "LHL"){
        document.getElementById("tideImgDesk").src = "images/lhlTides.png";
        document.getElementById("tideImgMob").src = "images/lhlTides.png";
    }
    if(a == "HLHL"){
        document.getElementById("tideImgDesk").src = "images/hlhlTides.png";
        document.getElementById("tideImgMob").src = "images/hlhlTides.png";
    }
    if(a == "LHLH"){
        document.getElementById("tideImgDesk").src = "images/lhlhTides.png";
        document.getElementById("tideImgMob").src = "images/lhlhTides.png";
    }
}

// | weather_location | weather_time | air_temp | wind_speed |
// |        -1        |       0      |    1     |      2     |
//
// | precipitation | wave_height | wave_period | current_speed | visibility
// |       3       |      4      |      5      |       6       |     7    
//
//unsortedArr2[x <-- *Change x value to match columns/values listed above
//
function timeHTMLSet(a){
    //
    //
    //Temperature
    //
    //
    //Text
    document.getElementById('tempTextDesk').innerHTML = "<br>Temperature<br>" + Math.round(unsortedArr2[1 + a]) + "&#176;C";
    document.getElementById('tempTextMob').innerHTML = "<br>Temperature<br>" + Math.round(unsortedArr2[1 + a]) + "&#176;C";
    //Gauge
    var tempLive = Math.round(unsortedArr2[1 + a]);
    if(tempLive == 15 || tempLive > 15){
        document.getElementById('tempLiveDialDesk').src = "images/g1f.png";
        document.getElementById('tempLiveDialMob').src = "images/g1f.png";
    }
    if(tempLive == 10 || tempLive == 11 || tempLive == 12 || tempLive == 13 || tempLive == 14 ){
        document.getElementById('tempLiveDialDesk').src = "images/g2f.png";
        document.getElementById('tempLiveDialMob').src = "images/g2f.png";
    }
    if(tempLive == 5 || tempLive == 6 || tempLive == 7 || tempLive == 8 || tempLive == 9){
        document.getElementById('tempLiveDialDesk').src = "images/g3f.png";
        document.getElementById('tempLiveDialMob').src = "images/g3f.png";
    }
    if(tempLive == 0 || tempLive == 1 || tempLive == 2 || tempLive == 3 || tempLive == 4){
        document.getElementById('tempLiveDialDesk').src = "images/g4f.png";
        document.getElementById('tempLiveDialMob').src = "images/g4f.png";
    }
    if(tempLive == -1 || tempLive < -1){
        document.getElementById('tempLiveDialDesk').src = "images/g5f.png";
        document.getElementById('tempLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Wind Speed
    //
    //
    //Text
    document.getElementById('windSpeedTextDesk').innerHTML = "Wind Speed<br>" + Math.round((unsortedArr2[2 + a])*2.23694) + " mph";
    document.getElementById('windSpeedTextMob').innerHTML = "Wind Speed<br>" + Math.round((unsortedArr2[2 + a])*2.23694) + " mph";
    //Gauge
    var windLive = Math.round((unsortedArr2[2 + a])*2.23694);
    if(windLive == 5 || windLive < 5){
        document.getElementById('windLiveDialDesk').src = "images/g1f.png";
        document.getElementById('windLiveDialMob').src = "images/g1f.png";
    }
    if(windLive == 6 || windLive == 7 || windLive == 8 || windLive == 9 || windLive == 10){
        document.getElementById('windLiveDialDesk').src = "images/g2f.png";
        document.getElementById('windLiveDialMob').src = "images/g2f.png";
    }
    if(windLive == 11 || windLive == 12 || windLive == 13 || windLive == 14 || windLive == 15){
        document.getElementById('windLiveDialDesk').src = "images/g3f.png";
        document.getElementById('windLiveDialMob').src = "images/g3f.png";
    }
    if(windLive == 16 || windLive == 17 || windLive == 18 || windLive == 19){
        document.getElementById('windLiveDialDesk').src = "images/g4f.png";
        document.getElementById('windLiveDialMob').src = "images/g4f.png";
    }
    if(windLive == 20 || windLive > 20){
        document.getElementById('windLiveDialDesk').src = "images/g5f.png";
        document.getElementById('windLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Rain
    //
    //
    //Text
    document.getElementById('rainTextDesk').innerHTML = "<br>Rain<br>" + Math.round(unsortedArr2[3 + a]) + " mm";
    document.getElementById('rainTextMob').innerHTML = "<br>Rain<br>" + Math.round(unsortedArr2[3 + a]) + " mm";
    //Gauge
    var rainLive = Math.round(unsortedArr2[3 + a]);
    if(rainLive == 0){
        document.getElementById('rainLiveDialDesk').src = "images/g1f.png";
        document.getElementById('rainLiveDialMob').src = "images/g1f.png";
    }
    if(rainLive == 1 || rainLive == 2 || rainLive == 3){
        document.getElementById('rainLiveDialDesk').src = "images/g2f.png";
        document.getElementById('rainLiveDialMob').src = "images/g2f.png";
    }
    if(rainLive == 4 || rainLive == 5 || rainLive == 6 || rainLive == 7 || rainLive == 8){
        document.getElementById('rainLiveDialDesk').src = "images/g3f.png";
        document.getElementById('rainLiveDialMob').src = "images/g3f.png";
    }
    if(rainLive == 9 || rainLive == 10  || rainLive  == 11 || rainLive == 12 || rainLive == 13){
        document.getElementById('rainLiveDialDesk').src = "images/g4f.png";
        document.getElementById('rainLiveDialMob').src = "images/g4f.png";
    }
    if(rainLive >= 14){
        document.getElementById('rainLiveDialDesk').src = "images/g5f.png";
        document.getElementById('rainLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Wave Height
    //
    //
    //Text
    document.getElementById('waveHeightTextDesk').innerHTML = "Wave Height<br>" + Math.round(((unsortedArr2[4 + a])*100)) + " cm";
    document.getElementById('waveHeightTextMob').innerHTML = "Wave Height<br>" + Math.round(((unsortedArr2[4 + a])*100)) + " cm";
    //Gauge
    var waveHLive = Math.round(((unsortedArr2[4 + a])*100));
    if(waveHLive <= 15){ 
        document.getElementById('waveHLiveDialDesk').src = "images/g1f.png";
        document.getElementById('waveHLiveDialMob').src = "images/g1f.png";
    }
    if(waveHLive <= 25 && waveHLive > 15){
        document.getElementById('waveHLiveDialDesk').src = "images/g2f.png";
        document.getElementById('waveHLiveDialMob').src = "images/g2f.png";
    }
    if(waveHLive <= 35 && waveHLive > 25){
        document.getElementById('waveHLiveDialDesk').src = "images/g3f.png";
        document.getElementById('waveHLiveDialMob').src = "images/g3f.png";
    }
    if(waveHLive <= 45 && waveHLive > 35){
        document.getElementById('waveHLiveDialDesk').src = "images/g4f.png";
        document.getElementById('waveHLiveDialMob').src = "images/g4f.png";
    }
    if(waveHLive >= 46){
        document.getElementById('waveHLiveDialDesk').src = "images/g5f.png";
        document.getElementById('waveHLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Wave Frequency
    //
    //
    //Text
    document.getElementById('waveFreqTextDesk').innerHTML = "Wave Frequency<br>" + Math.round(unsortedArr2[5 + a]) + " sec";
    document.getElementById('waveFreqTextMob').innerHTML = "Wave Frequency<br>" + Math.round(unsortedArr2[5 + a]) + " sec";
    //Gauge
    var waveFLive = Math.round(unsortedArr2[5 + a]);
    if(waveFLive >= 8){ 
        document.getElementById('waveFLiveDialDesk').src = "images/g1f.png";
        document.getElementById('waveFLiveDialMob').src = "images/g1f.png";
    }
    if(waveFLive >= 6 && waveFLive < 8){
        document.getElementById('waveFLiveDialDesk').src = "images/g2f.png";
        document.getElementById('waveFLiveDialMob').src = "images/g2f.png";
    }
    if(waveFLive >= 4 && waveFLive < 6){
        document.getElementById('waveFLiveDialDesk').src = "images/g3f.png";
        document.getElementById('waveFLiveDialMob').src = "images/g3f.png";
    }
    if(waveFLive >= 2 && waveFLive < 4){
        document.getElementById('waveFLiveDialDesk').src = "images/g4f.png";
        document.getElementById('waveFLiveDialMob').src = "images/g4f.png";
    }
    if(waveFLive <= 1){
        document.getElementById('waveFLiveDialDesk').src = "images/g5f.png";
        document.getElementById('waveFLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Water Current Speed
    //
    //
    //Text
    document.getElementById('waterCurTextDesk').innerHTML = "Water Currents<br>" + Math.round(((unsortedArr2[6 + a])*100)) + " cm/s";
    document.getElementById('waterCurTextMob').innerHTML = "Water Currents<br>" + Math.round(((unsortedArr2[6 + a])*100)) + " cm/s";
    //Gauge
    var waterCLive = Math.round(((unsortedArr2[6 + a])*100));
    if(waterCLive <= 4){ 
        document.getElementById('waterCLiveDialDesk').src = "images/g1f.png";
        document.getElementById('waterCLiveDialMob').src = "images/g1f.png";
    }
    if(waterCLive >= 5 && waterCLive < 10){
        document.getElementById('waterCLiveDialDesk').src = "images/g2f.png";
        document.getElementById('waterCLiveDialMob').src = "images/g2f.png";
    }
    if(waterCLive >= 10 && waterCLive < 20){
        document.getElementById('waterCLiveDialDesk').src = "images/g3f.png";
        document.getElementById('waterCLiveDialMob').src = "images/g3f.png";
    }
    if(waterCLive >= 20 && waterCLive < 30){
        document.getElementById('waterCLiveDialDesk').src = "images/g4f.png";
        document.getElementById('waterCLiveDialMob').src = "images/g4f.png";
    }
    if(waterCLive >= 30){
        document.getElementById('waterCLiveDialDesk').src = "images/g5f.png";
        document.getElementById('waterCLiveDialMob').src = "images/g5f.png";
    }
    //
    //
    //Visibility
    //
    //
    //Text
    document.getElementById('visTextDesk').innerHTML = "<br>Visibility<br>" + Math.round(unsortedArr2[7 + a]) + " km";
    document.getElementById('visTextMob').innerHTML = "<br>Visibility<br>" + Math.round(unsortedArr2[7 + a]) + " km";
    //Gauge
    var visLive = Math.round(unsortedArr2[7 + a]);
    if(visLive >= 20){
        document.getElementById('visLiveDialDesk').src = "images/g1f.png";
        document.getElementById('visLiveDialMob').src = "images/g1f.png";
    }
    if(visLive == 19 || visLive == 18 || visLive == 17 || visLive == 16 || visLive == 15 || visLive == 14){
        document.getElementById('visLiveDialDesk').src = "images/g2f.png";
        document.getElementById('visLiveDialMob').src = "images/g2f.png";
    }
    if(visLive == 13 || visLive == 12 || visLive == 11 || visLive == 10 || visLive == 9 || visLive == 8){
        document.getElementById('visLiveDialDesk').src = "images/g3f.png";
        document.getElementById('visLiveDialMob').src = "images/g3f.png";
    }
    if(visLive == 7 || visLive == 6 || visLive == 5 || visLive == 4 || visLive == 3 || visLive == 2){
        document.getElementById('visLiveDialDesk').src = "images/g4f.png";
        document.getElementById('visLiveDialMob').src = "images/g4f.png";
    }
    if(visLive == 1 || visLive < 1){
        document.getElementById('visLiveDialDesk').src = "images/g5f.png";
        document.getElementById('visLiveDialMob').src = "images/g5f.png";
    }
}

function today(){
    buttonToggle("today","tomorrow","dayAT");
    tideHTMLSet(tideHTMLDay1);
    tideImgEvent(tideCaseDay1);
    
    if(document.getElementById("sixAM").classList.contains("is-hovered")){
        exec6AM();
    }
    if(document.getElementById("nineAM").classList.contains("is-hovered")){
        exec9AM();
    }
    if(document.getElementById("twelvePM").classList.contains("is-hovered")){
        exec12PM();
    }
    if(document.getElementById("threePM").classList.contains("is-hovered")){
        exec3PM();
    }
    if(document.getElementById("sixPM").classList.contains("is-hovered")){
        exec6PM();
    }
}

function tomorrow(){
    buttonToggle("tomorrow","today","dayAT");
    tideHTMLSet(tideHTMLDay2);
    tideImgEvent(tideCaseDay2);
    
    if(document.getElementById("sixAM").classList.contains("is-hovered")){
        exec6AM();
    }
    if(document.getElementById("nineAM").classList.contains("is-hovered")){
        exec9AM();
    }
    if(document.getElementById("twelvePM").classList.contains("is-hovered")){
        exec12PM();
    }
    if(document.getElementById("threePM").classList.contains("is-hovered")){
        exec3PM();
    }
    if(document.getElementById("sixPM").classList.contains("is-hovered")){
        exec6PM();
    }
}

function dayAT(){
    buttonToggle("dayAT","today","tomorrow");
    tideHTMLSet(tideHTMLDay3);
    tideImgEvent(tideCaseDay3);
    
    if(document.getElementById("sixAM").classList.contains("is-hovered")){
        exec6AM();
    }
    if(document.getElementById("nineAM").classList.contains("is-hovered")){
        exec9AM();
    }
    if(document.getElementById("twelvePM").classList.contains("is-hovered")){
        exec12PM();
    }
    if(document.getElementById("threePM").classList.contains("is-hovered")){
        exec3PM();
    }
    if(document.getElementById("sixPM").classList.contains("is-hovered")){
        exec6PM();
    }
}

function exec6AM(){
    buttonToggle("sixAM","nineAM","twelvePM","threePM","sixPM");
    
    if(document.getElementById("today").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6AMToday);
    }
    if(document.getElementById("tomorrow").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6AMTomorrow);
    }
    if(document.getElementById("dayAT").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6AMDayAT);
    }
}

function sixAM(){
    exec6AM();
}

function exec9AM(){
    buttonToggle("nineAM","sixAM","twelvePM","threePM","sixPM");
    
    if(document.getElementById("today").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex9AMToday);
    }
    if(document.getElementById("tomorrow").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex9AMTomorrow);
    }
    if(document.getElementById("dayAT").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex9AMDayAT);
    }
}

function nineAM(){
    exec9AM();
}

function exec12PM(){
    buttonToggle("twelvePM","sixAM","nineAM","threePM","sixPM");
    
    if(document.getElementById("today").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex12PMToday);
    }
    if(document.getElementById("tomorrow").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex12PMTomorrow);
    }
    if(document.getElementById("dayAT").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex12PMDayAT);
    }
}

function twelvePM(){
    exec12PM();
}

function exec3PM(){
    buttonToggle("threePM","sixAM","twelvePM","nineAM","sixPM");
    
    if(document.getElementById("today").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex3PMToday);
    }
    if(document.getElementById("tomorrow").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex3PMTomorrow);
    }
    if(document.getElementById("dayAT").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex3PMDayAT);
    }
}

function threePM(){
    exec3PM();
}

function exec6PM(){
    buttonToggle("sixPM","sixAM","twelvePM","threePM","nineAM");
    
    if(document.getElementById("today").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6PMToday);
    }
    if(document.getElementById("tomorrow").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6PMTomorrow);
    }
    if(document.getElementById("dayAT").classList.contains("is-hovered")){
        timeHTMLSet(foundIndex6PMDayAT);
    }
}

function sixPM(){
    exec6PM();
}
