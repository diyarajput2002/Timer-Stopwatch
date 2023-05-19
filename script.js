let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

function startTimer() {
  const hoursInput = document.getElementById('hours-input');
  const minutesInput = document.getElementById('minutes-input');
  const secondsInput = document.getElementById('seconds-input');

  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds > 0) {
    clearInterval(timerInterval);

    timerSeconds = totalSeconds % 60;
    timerMinutes = Math.floor(totalSeconds / 60) % 60;
    timerHours = Math.floor(totalSeconds / 3600);

    updateTimer();

    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  updateTimer();
  document.getElementById('hours-input').value = '';
  document.getElementById('minutes-input').value = '';
  document.getElementById('seconds-input').value = '';
}

function updateTimer() {
  if (timerSeconds === 0 && timerMinutes === 0 && timerHours === 0) {
    stopTimer();
    return;
  }

  timerSeconds--;

  if (timerSeconds < 0) {
    timerSeconds = 59;
    timerMinutes--;

    if (timerMinutes < 0) {
      timerMinutes = 59;
      timerHours--;
    }
  }

  const secondsDisplay = formatTime(timerSeconds);
  const minutesDisplay = formatTime(timerMinutes);
  const hoursDisplay = formatTime(timerHours);

  document.getElementById('timer-seconds').textContent = secondsDisplay;
  document.getElementById('timer-minutes').textContent = minutesDisplay;
  document.getElementById('timer-hours').textContent = hoursDisplay;
}

let stopwatchInterval;
let stopwatchMilliseconds = 0;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchMilliseconds = 0;
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  updateStopwatch();
}

function updateStopwatch() {
  stopwatchMilliseconds += 10;

  if (stopwatchMilliseconds >= 1000) {
    stopwatchMilliseconds = 0;
    stopwatchSeconds++;

    if (stopwatchSeconds >= 60) {
      stopwatchSeconds = 0;
      stopwatchMinutes++;

      if (stopwatchMinutes >= 60) {
        stopwatchMinutes = 0;
        stopwatchHours++;
      }
    }
  }

  const millisecondsDisplay = formatMilliseconds(stopwatchMilliseconds);
  const secondsDisplay = formatTime(stopwatchSeconds);
  const minutesDisplay = formatTime(stopwatchMinutes);
  const hoursDisplay = formatTime(stopwatchHours);

  document.getElementById('stopwatch-milliseconds').textContent = millisecondsDisplay;
  document.getElementById('stopwatch-seconds').textContent = secondsDisplay;
  document.getElementById('stopwatch-minutes').textContent = minutesDisplay;
  document.getElementById('stopwatch-hours').textContent = hoursDisplay;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(milliseconds) {
  return milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
}