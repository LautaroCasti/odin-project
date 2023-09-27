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

function playGame(playerChoice, cpuChoice) {
  if (playerChoice === "rock") {
    if (cpuChoice === "rock") results.ties += 1;
    else if (cpuChoice === "paper") results.losses += 1;
    else results.wins += 1;
  } else if (playerChoice === "paper") {
    if (cpuChoice === "rock") results.wins += 1;
    else if (cpuChoice === "paper") results.ties += 1;
    else results.losses += 1;
  } else {
    if (cpuChoice === "rock") results.losses += 1;
    else if (cpuChoice === "paper") results.wins += 1;
    else results.ties += 1;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerMove = pickChoice();
    let pcMove = pickRandomChoice();
    playGame(playerMove, pcMove);
  }
}

game();
console.log(results);