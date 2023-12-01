let timer;
let minutesInput = document.getElementById('minutes');
let timerDisplay = document.getElementById('timer');
let startTime;
const timerClass = timerDisplay.classList;

function startTimer() {
    let minutes = parseInt(minutesInput.value);
    
    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid positive number for minutes.');
        return;
    }

    // timerDisplay.classList.remove("timer-done");
    // timerDisplay.classList.remove("timer");

    let seconds = minutes * 60;
    startTime = ( Date.now() + seconds * 1000 ) + 1000; //Adding 1 extra second (delay)

    timer = setInterval(updateTimer, 1000);
    // updateTimer();
}

function updateTimer() {
    let currentTime = Math.floor((startTime - Date.now()) / 1000);

    if (currentTime <= 0) {
        stopTimer();
        alert('Time\'s Up ⏰!');
        return;
    }

    let displayMinutes = Math.floor(currentTime / 60);
    let displaySeconds = currentTime % 60;

    displayMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
    displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

    timerDisplay.innerText = `${displayMinutes}:${displaySeconds}`;
    if (currentTime <= 10){
        if (!timerClass.contains("timer")) {
            timerClass.add("timer");
        }
    }
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
