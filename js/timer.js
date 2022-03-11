const timerBtn = document.getElementById("timerButton");
let inputNum = document.querySelector("#inputQuantity").value;
let period = parseInt(inputNum, 10);
    
function handleTimerBtnClick() {
    if(timerBtn.innerText ==="Start!") {
        timerBtn.innerText = "Stop";
        setInterval(function(){
            window.open("index.html");
            window.close()}, 3000);
        
    }else{
        timerBtn.innerText = "Start!"
    }
}

timerBtn.addEventListener("click", handleTimerBtnClick);
