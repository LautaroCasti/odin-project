/*
  
  playerChoice = pickChoice() // assing rock, paper or scissor
  cpuChoice = pickRandomChoice() // return "rock", "paper", "scissor"
  playGame(playerChoice, cpuChoice)
    if cpuChoice == "rock" // compares with the player pick and return if it wins or loses
      if ...
      if ...
      if ...
    if cpuChoice == "paper" // same method
    if cpuChoice == "scissor" // same method
  showResult() // print "wins" or "losses" depends on the result of the method upthere

*/

const options = ["rock", "paper", "scissors"];
const results = {
  wins: 0,
  ties: 0,
  losses: 0,
}

function pickRandomChoice() {
  return options[Math.floor(Math.random() * 3)]
}

function pickChoice() {
  return prompt("What's your play?", "rock").toLowerCase();
}

function playGame(playerChoice) {
  let cpuChoice = pickRandomChoice();
  let result;
  if (playerChoice === "rock") {
    if (cpuChoice === "rock") {
      results.ties += 1;
      result = "Tied";
    } else if (cpuChoice === "paper") {
      results.losses += 1;
      result = "Lost";
    } else {
      results.wins += 1;
      result = "Win";
    }
  } else if (playerChoice === "paper") {
    if (cpuChoice === "rock") {
      results.wins += 1;
      result = "Win";
    }
    else if (cpuChoice === "paper") {
      results.ties += 1;
      result = "Tied";
    }
    else {
      results.losses += 1;
      result = "Lost";
    }
  } else {
    if (cpuChoice === "rock") {
      results.losses += 1;
      result = "Lost";
    }
    else if (cpuChoice === "paper") {
      results.wins += 1;
      result = "Win";
    }
    else {
      results.ties += 1;
      result = "Tied"
    }
  }
  let message = `You played ${playerChoice} and the machine played ${cpuChoice}.
  Result = You ${result}`

  return message;
}

function displayScore() {
  let score = `You: ${results.wins}    Computer: ${results.losses}`

  divScore.textContent = score;
}

function checkResult() {
  if (results.wins === 5) {
    finishResult.textContent = "You Won the series"
    resetScore();
  } else if (results.losses === 5) {
    finishResult.textContent = "You loss the series"
    resetScore();
  }
}

function resetScore() {
  results.losses = 0;
  results.wins = 0;
  results.ties = 0;
  finishResult.textContent = ""
}

const choiceBtns = document.querySelectorAll("button");
const divResults = document.querySelector(".results");
const divScore = document.querySelector(".score");
const finishResult = document.querySelector(".finished");

for (const choice of choiceBtns) {
  choice.addEventListener("click", () => {
    divResults.textContent = playGame(choice.textContent.toLowerCase())
    checkResult();
    displayScore();
  })
}

