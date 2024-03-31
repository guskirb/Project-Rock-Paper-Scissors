const playerSelection = "";
const computerSelection = getComputerChoice();
const scoreboard = document.getElementById("score");
const compScore = document.getElementById("compScore")
let myscore = 0;
let pcscore = 0;
const round = document.getElementById("round");

console.log(playGame());


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        round.textContent = "DRAW";
    } else if (player == "scissors" && computer == "paper") {
        round.textContent = "YOU: SCISSORS PC: PAPER";
        return ++myscore
    } else if (player == "paper" && computer == "rock") {
        round.textContent = "YOU: PAPER PC: ROCK";
        return ++myscore
    } else if (player == "rock" && computer == "scissors") {
        round.textContent = "YOU: ROCK PC: SCISSORS";
        return ++myscore
    } else if (player == "scissors" && computer == "rock") {
        round.textContent = "YOU: SCISSORS PC: ROCK";
        return ++pcscore
    } else if (player == "paper" && computer == "scissors") {
        round.textContent = "YOU: PAPER PC: SCISSORS";
        return ++pcscore
    } else if (player == "rock" && computer == "paper") {
        round.textContent = "YOU: ROCK PC: PAPER";
        return ++pcscore
    } else {
        return "Make sure you type either Rock, Paper or Scissors!"
    }
};



function playGame(playerSelection) {
    console.log(playRound(playerSelection, getComputerChoice()));
    scoreboard.innerText = myscore;
    compScore.innerText = pcscore;
    if (myscore >= 5) {
        scoreboard.innerText = "YOU WIN";
        myscore = 0;
        pcscore = 0;
    } if (pcscore >= 5) {
        scoreboard.innerText = "YOU LOSE";
        myscore = 0;
        pcscore = 0;
    }
};

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", play => {
    playGame("rock");
});

paperButton.addEventListener("click", play => {
    playGame("paper");
});

scissorsButton.addEventListener("click", play => {
    playGame("scissors");
});



