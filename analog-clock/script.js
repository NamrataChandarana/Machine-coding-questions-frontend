const hourElement = document.querySelector('.hour');
const minElement = document.querySelector('.min');
const secondElement = document.querySelector('.second');

function dispalyTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds(); 

    let hr = 30 * hh + mm/2;
    let mr = mm/2;
    let sr = 30 * ss;

    hourElement.style.transform = `rotate(${hr})`;
    minElement.style.transform = `rotate(${mr})`;
    secondElement.style.transform = `rotate(${sr})`;
}

setInterval(dispalyTime, 1000);