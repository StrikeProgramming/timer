const minutes = document.querySelector(".mins"),
  seconds = document.querySelector(".secs"),
  milliseconds = document.querySelector(".mil-secs"),
  startBtn = document.querySelector(".start"),
  resetBtn = document.querySelector(".reset"),
  dividerFlash = document.querySelector(".divider");

/*=============== SET INITIAL ===============*/

let timerInterval,
  mins = 0,
  secs = 0;

/*=============== FUNCTIONS ===============*/

const updateDisplay = () => {
  minutes.textContent = mins < 10 ? "0" + mins : mins;
  seconds.textContent = secs < 10 ? "0" + secs : secs;
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    secs++;
    if (secs === 60) {
      mins++;
    }
    updateDisplay();
  }, 1000);
  startBtn.textContent = "STOP";
  startBtn.classList.add("stop");
  dividerFlash.classList.add("divider");
};

const stopDividerFlash = () => {
  dividerFlash.classList.remove("divider");
};

const stopTimer = () => {
  clearInterval(timerInterval);
  startBtn.textContent = "START";
  startBtn.classList.remove("stop");
  stopDividerFlash();
};

const resetTimer = () => {
  clearInterval(timerInterval);
  mins = 0;
  secs = 0;
  updateDisplay();
  startBtn.textContent = "START";
  startBtn.classList.remove("stop");
  stopDividerFlash();
};

// EVENTS LISTENERS

startBtn.addEventListener("click", () => {
  startBtn.textContent === "START" ? startTimer() : stopTimer();
});

resetBtn.addEventListener("click", resetTimer);

stopDividerFlash();
