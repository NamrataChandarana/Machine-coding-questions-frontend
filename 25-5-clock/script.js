const increaseMinBtn = document.querySelector('.increaseMin');
const increaseHourBtn = document.querySelector('.increaseHr');
const decreaseMinBtn = document.querySelector('.decreaseMin');
const decreaseHourBtn = document.querySelector('.decreaseHr');
const minBtn = document.querySelector('.min');
const hourBtn = document.querySelector('.hour');
const cntMinBtn = document.querySelector('.cntMin');
const cntHourBtn = document.querySelector('.cntHour');
const cntStartBtn = document.querySelector('.cntStart');
const cntResetBtn = document.querySelector('.cntReset')
let cntOn = false;
let intervalId;


function increase(increaseBtn, cntBtn){
    let currentValue = parseInt(increaseBtn.innerText);
    increaseBtn.innerText = currentValue + 1;
   cntBtn ? cntBtn.innerText =  increaseBtn.innerText : null;
}
function decrease(decreaseBtn){
    let currentValue = parseInt(decreaseBtn.innerText)
    decreaseBtn.innerText = currentValue - 1;
}
//start counter
function counterStart(cntMin){
    cntOn = !cntOn;
    console.log(cntOn);
    if(cntOn){
        intervalId = setInterval(()=>{
            let currentValue = parseInt(cntMin.innerText);
            if(currentValue > 0 && cntOn === true){
                cntMin.innerText = currentValue - 1;
            }else{
                clearInterval(intervalId);
                cntOn = false;
            }
        }, 1000)
    }else{
        clearInterval(intervalId)
    }
   
}

//Reset counter
function counterReset(cntResetHr, cntResetMin){
    cntResetMin.innerText = "50";
    cntResetHr.innerText = "25";
    cntOn = false;
}

//Increase
increaseMinBtn.addEventListener("click",() => increase(minBtn))
increaseHourBtn.addEventListener("click",() => increase(hourBtn, cntHourBtn))

//Decrease
decreaseMinBtn.addEventListener("click",() => decrease(minBtn))
decreaseHourBtn.addEventListener("click",() => decrease(hourBtn))

//Start & Reset counter Event
cntStartBtn.addEventListener("click", () => counterStart(cntMinBtn))
cntResetBtn.addEventListener("click", () => counterReset(cntHourBtn, cntMinBtn) )

