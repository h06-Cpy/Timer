const timerBtn = document.getElementById("timerButton");
let inputNum = document.querySelector("input#inputQuantity").value;
let due = parseInt(inputNum, 10);

let sittingTime = 0;
let hour;
let min;
let sec;
const clock = document.querySelector("h3#clock");
let interval;
let timeOut;
function showSittingTime(){
    hour = parseInt(sittingTime/3600);
    min = parseInt(sittingTime/60);
    sec = sittingTime%60;
    clock.innerText = "you are sitting for "+ hour + ":" + min + ":" + sec;
}
function handleTimerBtnClick() {
    if(timerBtn.innerText ==="Start!") {
        timerBtn.innerText = "Stop";
        showSittingTime();
        interval = setInterval(function() {
            showSittingTime();
            sittingTime++;
        }, 1000);
        timeOut = setTimeout(function(){
            window.open("index.html");
            window.close()}, 6000*due);   

    }else{
        timerBtn.innerText = "Start!"
        clearInterval(interval);
        clearTimeout(timeOut);
        sittingTime = 0;
        clock.innerText = "";
    }
}

timerBtn.addEventListener("click", handleTimerBtnClick);
