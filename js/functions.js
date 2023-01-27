console.log("functions.js started.");
//var myVar = setInterval(function () {
//    myTimer();
//}, 1000);
//function myTimer() {
  //  document.getElementById("clock").innerText = GetClock();
    //document.getElementById("date").innerText = GetDate();
//}
console.log("functions.js ended.");


// get unix time :
function getCurrentUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}
const first_unix = 1674678600; //  2023 / 1 / 26   00:00:00
function GetPassedSec(){
    return getCurrentUnixTimestamp() - first_unix;
}
function ConvertSecToDate() // its just a test function
{
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var month = Math.floor(day / 30);
    var year = Math.floor(month / 12);
    sec = sec - min * 60;
    min = min - hour * 60;
    hour = hour - day * 24;
    day = day - month * 30;
    month = month - year * 12;
    return "years : " + year + " | months : " + month + " | days : " + day + " | hours : " + hour + " | minutes : " + min + " | seconds : " + sec ;
}
console.log(ConvertSecToDate());

function GetClock(){
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    sec = sec - min * 60;
    min = min - hour * 60;
    hour = hour - day * 24;
    return hour + ":" + min + ":" + sec;
}
console.log(GetClock());
function GetDate(){
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var month = Math.floor(day / 30);
    var year = Math.floor(month / 12);
    day = day - month * 30;
    month = month - year * 12;
    return year + "/" + month + "/" + day;
}
console.log(GetDate());