console.log("functions.js started.");
var myVar = setInterval(function () {
    myTimer();
}, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
console.log("functions.js ended.");