// var hide= document.querySelector(".start")
const startBtn = document.querySelector(".start");
const questionDiv = document.querySelector(".question");
const timerDiv = document.querySelector(".timer");

let timeLeft = 0;

function renderTimer() {
  // Clear the old stuff
  questionDiv.innerHTML = "";
  timerDiv.append(`Timer: ${timeLeft}s`);
}

let currentQuestion = null;

function renderQuestion() {
  // Clear the old stuff
  questionDiv.innerHTML = "";
  questionDiv.append(currentQuestion.text);
  // TODO: Create radio buttons
}

startBtn.addEventListener("click", () => {
  // Prevent starting another interval
  if (timeLeft > 0) {
    return;
  }

  timeLeft = 60;

  renderTimer();

  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      // Stop the interal from repeating
      clearInterval(interval);
      return;
    }
                            

    // 1. Set the state
    timeLeft--;

    // 2. Re-render
    renderTimer();
  }, 1000);

  currentQuestion = questions[0];

  renderQuestion();

  // currentQuestion = questions[1];

  // renderQuestion();

  // currentQuestion = questions[2];

  // renderQuestion();

  // currentQuestion = questions[3];

  // renderQuestion();

  // currentQuestion = questions[4];

  // renderQuestion();

  // if (questionDiv.style.display === "none") {
  //   questionDiv.style.display = "block";
  // } else {
  //   questionDiv.style.display = "none";
  // }
});
