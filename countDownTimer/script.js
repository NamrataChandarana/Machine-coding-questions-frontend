const hours = document.querySelector(".hrinput");
const minutes = document.querySelector(".mininput");
const seconds = document.querySelector(".secinput");

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
let TimeInterval;


startBtn.addEventListener('click',() =>{
    stopBtn.style.display = "inline";
    startBtn.style.display = 'none';
    setTimeInterval();
});

stopBtn.addEventListener('click',() =>{
    stopBtn.innerHTML == "Stop" ? stopBtn.innerHTML ="Continue" : stopBtn.innerHTML = "Stop";
    if(stopBtn.innerHTML == "Stop"){
        stopBtn.innerHTML = "Stop"
        setTimeInterval();
    }else{
        clearInterval(TimeInterval);
        stopBtn.innerHTML = "Continue"
    }
})

function setTimeInterval(){
     TimeInterval = setInterval(() => {
        timer();
    },1000);
}

function stopInterval (state){
    stopBtn.innerHTML = "Start";
    clearInterval(TimeInterval);
}

function timer(){
    if(hours.value == 0 && seconds.value == 0 && minutes.value == 0){
        hours.value =""
        minutes.value =""
        seconds.value =""
        stopInterval();
    }else if(seconds.value != 0) {
        seconds.value =`${parseInt(seconds.value) < "10" ? "0" : ""}${parseInt(seconds.value) - 1}`;
    }else if(minutes.value != 0 && seconds.value == 0){
        seconds.value = 59;
        minutes.value = `${parseInt(minutes.value) < "10" ? "0" : ""}${parseInt(minutes.value) - 1}`;;
    }else if(hours.value != 0 && minutes.value == 0){
        minutes.value = 60;
        hours.value =`${parseInt(hours.value) < "10" ? "0" : ""}${parseInt(hours.value) - 1}`;
    }else{
        stopInterval();
    }
}

resetBtn.addEventListener('click', () =>{
    hours.value = ""
    minutes.value = ""
    seconds.value = ""
    stopInterval();
})
