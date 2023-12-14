let timer;
let isRunning = false;
let seconds = 0;
let lapCount = 1;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateDisplay, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  lapCount = 1;
  updateDisplay();
  document.getElementById('lapTimes').innerHTML = '';
}

function lapTime() {
  if (isRunning) {
    const lapTime = formatTime(seconds);
    const lapItem = document.createElement('div');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('lapTimes').appendChild(lapItem);
    lapCount++;
  }
}

function updateDisplay() {
  seconds++;
  document.getElementById('display').textContent = formatTime(seconds);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
