
var minutes=0;
var seconds=0;
var hundredths=0;
var minHeading=document.getElementById("minutes");
var secHeading=document.getElementById("seconds");
var hundredthsHeading=document.getElementById("hundredths");
var interval;
function timer(){
    hundredths++
    hundredthsHeading.innerHTML=hundredths;
    if(hundredths >= 100){
        seconds++
        secHeading.innerHTML=seconds
        hundredths=0
    }
    else if(seconds >= 60)
    minutes++
    minHeading.innerHTML=minutes
    sec=0
}
function start(){
interval=setInterval(timer,10)

}
function stop(){
    clearInterval(interval)
    }
 function reset(){
        minutes=0
        seconds=0
        hundredths=0
        minHeading.innerHTML=minutes
        secHeading.innerHTML=seconds
        hundredthsHeading.innerHTML=hundredths;
        stop()
    }