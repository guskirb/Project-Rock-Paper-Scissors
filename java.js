const playerSelection = "";
const computerSelection = getComputerChoice();
let myscore = 0
let pcscore = 0


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
}

function playRound(playerSelection, computerSelection) {
    let player = prompt("Rock, Paper, Scissors?").toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "You draw!";
    } else if (player == "scissors" && computer == "paper") {
        console.log("You win! Scissors beats Paper");
        return ++myscore
    } else if (player == "paper" && computer == "rock") {
        console.log("You win! Paper beats Rock");
        return ++myscore
    } else if (player == "rock" && computer == "scissors") {
        console.log("You win! Rock beats Scissors")
        return ++myscore
    } else if (player == "scissors" && computer == "rock") {
        console.log("You lose! Rock beats Scissors")
        return ++pcscore
    } else if (player == "paper" && computer == "scissors") {
        console.log("You lose! Scissors beats Paper")
        return ++pcscore
    } else if (player == "rock" && computer == "paper") {
        console.log("You lose! Paper beats Rock")
        return ++pcscore
    } else {
        return "Make sure you type either Rock, Paper or Scissors!"
    }
}

function playGame() {
    for (let x = 0; x < 5; x++) {
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log("You: " + myscore + " PC: " + pcscore)
    } if (myscore > pcscore) {
        console.log("You Win!")
    } else if (pcscore > myscore) {
        console.log("You Lose!")
    } else {
        console.log("You Draw!")
    }
}

