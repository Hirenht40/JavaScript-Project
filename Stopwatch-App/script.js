// Select elements
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Initialize variables
let startTime, endTime, running;

// Start the stopwatch
startBtn.addEventListener("click", function() {
  if (running) return;
  running = true;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 10);
});

// Stop the stopwatch
stopBtn.addEventListener("click", function() {
  if (!running) return;
  running = false;
  clearInterval(timerInterval);
  endTime = new Date();
});

// Reset the stopwatch
resetBtn.addEventListener("click", function() {
  clearInterval(timerInterval);
  running = false;
  timer.innerHTML = "00:00:00.00";
  startTime = null;
  endTime = null;
});

// Update the timer
function updateTimer() {
  if (!startTime) return;
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - startTime);
  let min = timeElapsed.getUTCMinutes();
  let sec = timeElapsed.getUTCSeconds();
  let ms = timeElapsed.getUTCMilliseconds();

  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
  ms = (ms < 100) ? "0" + ms : ms;

  timer.innerHTML = min + ":" + sec + ":" + ms;
}
