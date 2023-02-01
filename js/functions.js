var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = '#00ffff'

function getCurrentUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}
const first_unix = 1674678600; //  2023 / 1 / 26   00:00:00
function GetPassedSec() {
    return getCurrentUnixTimestamp() - first_unix;
}
function GetYear(){
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var month = Math.floor(day / 30);
    var year = Math.floor(month / 12);
    day = day - month * 30;
    month = month - year * 12;
    if(year < 10){
        year = "000" + year;
    }
    else if(year < 100){
        year = "00" + year;
    }
    else if(year < 1000){
        year = "0" + year;
    }
    return year;
}
function GetMonth(){
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var month = Math.floor(day / 30);
    var year = Math.floor(month / 12);
    day = day - month * 30;
    month = month - year * 12;
    if(month < 10){
        month = "0" + month;
    }
    return month;
}
function GetDay(){
    var sec = GetPassedSec();
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var month = Math.floor(day / 30);
    var year = Math.floor(month / 12);
    day = day - month * 30;
    month = month - year * 12;
    if(year < 10){
        year = "000" + year;
    }
    else if(year < 100){
        year = "00" + year;
    }
    else if(year < 1000){
        year = "0" + year;
    }
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    } 
    return day;
}

function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var today = now.toDateString();
   // console.log(today); //Wed Feb 01 2023
   today = "PGN P" + GetMonth() + " " + GetDay() + " " + GetYear();
    var time = now.toLocaleTimeString();
   // console.log(time); //1:44:13 PM
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mil = now.getMilliseconds();
    var smoothsec = sec + (mil / 1000);
    var smoothmin = min + (smoothsec / 60);

    //Background
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
    ctx.fillRect(0, 0, 500, 500);
    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90));
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((smoothmin * 6) - 90));
    ctx.stroke();
    //Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((smoothsec * 6) - 90));
    ctx.stroke();
    //Date
    ctx.font = "25px Helvetica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)'
    ctx.fillText(today, 175, 250);
    //Time
    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time + ":" + mil, 175, 280);

}
setInterval(renderTime, 40);