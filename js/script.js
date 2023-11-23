/*--------------
Dichiarazioni delle variabili
----------------*/

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const panelEl = document.querySelector('.panel');


//Tabella MS (millisecondi)
const secondInMs = 1000;
const minutesInMs = 60 * secondInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

const counterTime = setInterval(timer, 1000);

/*---- Funzioni ----*/
function timer () {
    
    //Data di capodanno
    const endDate = new Date("January 1 2024");
    const endDateInMs = new Date();

    //oggi in ms
    let newInMs = new Date().getTime;
    let diff= Math.floor(endDate - endDateInMs);
    
    if (diff > 0) {
        daysEl.innerHTML = Math.floor (diff / daysInMs);
        hoursEl.innerHTML = Math.floor ( (diff % daysInMs) /hoursInMs );
        minutesEl.innerHTML = Math.floor ((diff % hoursInMs) /minutesEl);
        secondsEl.innerHTML = Math.floor ((diff % minutesInMs) /secondInMs);
    }
    else {
        clearInterval(timer);
        panelEl.innerHTML = "<h2> Happy New Year!</h2>";
    }  
}