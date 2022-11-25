// Elements for score
let userScoreEl = document.querySelector(".user-zero");
let compScoreEl = document.querySelector(".comp-zero");

// Variable
let userScore = 0;
let compScore = 0;

const getCompChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
};

// user choice

const playGame = function (weapon) {
  const user = weapon;
  const comp = getCompChoice();

  const result = getResult(user, comp);

  if (result === "WON") {
    userScore = userScore + 1;
  } else if (result === "LOST") {
    compScore = compScore + 1;
  }

  userScoreEl.innerText = userScore;
  compScoreEl.innerText = compScore;

  document.querySelector(".user").innerText = `user Selected ${user}`;
  document.querySelector(".comp").innerText = `Computer Selected ${comp}`;
  document.querySelector(".final-result").innerText = `The result is ${result}`;
};

const getResult = function (userChoice, compChoice) {
  if (userChoice === "rock") {
    if (compChoice === "rock") {
      return "DRAW";
    } else if (compChoice === "paper") {
      return "LOST";
    } else if (compChoice === "scissors") {
      return "WON";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      return "WON";
    } else if (compChoice === "paper") {
      return "DRAW";
    } else if (compChoice === "scissors") {
      return "LOST";
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "rock") {
      return "LOST";
    } else if (compChoice === "paper") {
      return "WON";
    } else if (compChoice === "scissors") {
      return "DRAW";
    }
  }
};
