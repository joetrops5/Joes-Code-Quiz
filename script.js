const startBtn = document.querySelector(".start");
const questionDiv = document.querySelector(".question");
const timerDiv = document.querySelector(".timer");
const answerText = document.querySelector(".answer");
const highScoresSection = document.querySelector(".high_scores");

// {"initials": score}
let highScores = {};

function renderHighScores() {
  highScoresSection.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.innerHTML = "High Scores";
  highScoresSection.append(h2);

  for (let initials in highScores) {
    highScoresSection.append(initials, " - ", highScores[initials]);
    highScoresSection.innerHTML += "</br>";
  }
}

let interval = null;

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

let timeLeft = 0;

function renderTimer() {
  // Clear the old stuff
  timerDiv.innerHTML = "";
  timerDiv.append(`Timer: ${timeLeft}s`);
}

let currentQuestionIndex = null;

function renderQuestion() {
  if (currentQuestionIndex >= questions.length) {
    return;
  }

  const question = questions[currentQuestionIndex];

  // Clear the old stuff
  questionDiv.innerHTML = "";
  questionDiv.append(question.text);

  const form = document.createElement("form");

  for (const key in question.options) {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "answer";
    radioButton.value = key;
    // Require the user to choose an option before submitting
    radioButton.required = true;

    const label = document.createElement("label");
    label.append(radioButton);

    label.append(" " + question.options[key]);

    form.append(label);
  }

  const button = document.createElement("button");
  button.innerHTML = "Submit";
  form.append(button);

  form.addEventListener("submit", (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    const selectedButton = document.querySelector("[name='answer']:checked");
    if (selectedButton.value != question.answer) {
      timeLeft -= 10;
      renderTimer();
    }

    if (currentQuestionIndex == questions.length - 1) {
      stopTimer();
      renderGameOver();
    }

    currentQuestionIndex++;
    renderQuestion();
  });

  questionDiv.append(form);
}

function renderGameOver() {
  // Clear the old stuff
  questionDiv.innerHTML = "";

  const form = document.createElement("form");
  const textbox = document.createElement("input");
  textbox.type = "text";
  textbox.placeholder = "Initials...";
  textbox.required = true;
  form.append(textbox);

  const button = document.createElement("button");
  button.innerHTML = "Submit";
  form.append(button);

  form.addEventListener("submit", (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    highScores[textbox.value] = timeLeft;
    renderHighScores();
    questionDiv.innerHTML = "Thanks for playing!";
  });

  questionDiv.append(form);
}

startBtn.addEventListener("click", () => {
  // Prevent starting another interval
  if (interval != null) {
    return;
  }

  timeLeft = 60;

  renderTimer();

  interval = setInterval(() => {
    if (timeLeft <= 0) {
      // Stop the interal from repeating
      stopTimer();
      return;
    }

    // 1. Set the state
    timeLeft--;

    if (timeLeft <= 0) {
      renderGameOver();
    }

    // 2. Re-render
    renderTimer();
  }, 1000);

  currentQuestionIndex = 0;
  renderQuestion();

});
