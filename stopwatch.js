var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var unlockBtn = document.getElementById("unlockstopwatch");
var stopwatchContainer = document.getElementById("stopwatch-container");
var padLock = document.getElementById("errorlock");
var btnText = document.getElementById("buttontext");
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;
 
 unlockBtn.addEventListener("click",unLock);
/* function to start stopwatch */
function unLock(e){
    e.preventDefault();
        if (unlockBtn.textContent=="Lock stopwatch")
        {
            var conFirm = confirm("are you sure you want to lock this stopwatch?")
    if (conFirm==true){
var proMpt = prompt("input the password to lock this stopwatch, note that the password is a number", "");
if (proMpt =="223344"){
    alert("password correct, CLOSE to lock stopwatch");
stopwatchContainer.style.display="none";
padLock.style.display="block";
btnText.textContent="Unlock stopwatch";
unlockBtn.classList.replace("btn-danger","btn-success");
}
else{
    alert("password Unlock canceled, try again!!!!");
}
}
else{
    alert("password Lock canceled, try again!!!!");
}
}
    else if (unlockBtn.textContent=="Unlock stopwatch"){
var proMpt = prompt("input the password to unlock this stopwatch, note that the password is a number", "");
if (proMpt =="223344"){
    alert("password correct, CLOSE to display stopwatch");
stopwatchContainer.style.display="block";
padLock.style.display="none";
btnText.textContent="Lock stopwatch";
unlockBtn.classList.replace("btn-success","btn-danger");
}
else{
    alert("password Unlock canceled, try again!!!!");
}
}
}

/* function to start stopwatch */
function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursivly to continue stopwatch
        start();
 
    }, 10); // setTimeout delay time 10 milliseconds
}
 
/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
}