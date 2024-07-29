let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    startStopBtn.textContent = 'Pause';
    isRunning = true;
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
    laps.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = document.createElement('li');
    lapTime.textContent = display.textContent;
    laps.appendChild(lapTime);
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0');
    display.textContent = `${minutes}:${seconds}.${milliseconds}`;
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseStopwatch();
    } else {
        startStopwatch();
    }
});

resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', lapStopwatch);
