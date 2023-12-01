let timer;
let minutesInput = document.getElementById('minutes');
let timerDisplay = document.getElementById('timer');
let startTime;
let elapsedTime = 0;
const timerClass = timerDisplay.classList;

function startTimer() {
    let minutes = parseInt(minutesInput.value);
    
    if (isNaN(minutes) || minutes < 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    timerDisplay.classList.remove("timer-done");
    timerDisplay.classList.remove("timer");
    clearInterval(timer);
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
    // updateTimer();
    
}

function updateTimer() {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    if (elapsedTime >= minutesInput.value * 60) {
        stopTimer();
        alert('Time\'s Up ⏰!');
    }
    
    if (elapsedTime >= minutesInput.value * 60 - 10){
        if (!timerClass.contains("timer")) {
            timerClass.add("timer");
        }
    }
    

    let displayMinutes = Math.floor(elapsedTime / 60);
    let displaySeconds = elapsedTime % 60;



    displayMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
    displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

    timerDisplay.innerText = `${displayMinutes}:${displaySeconds}`;
}

function stopTimer() {
    clearInterval(timer);
    const timerClass = timerDisplay.classList;
    timerClass.remove("timer");
    timerClass.add("timer-done");
    timerDisplay.innerText = '00:00';
    minutesInput.value = '';
    elapsedTime = 0;
}
