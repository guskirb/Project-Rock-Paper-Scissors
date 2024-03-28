const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "You draw!";
    } else if (player == "scissors" && computer == "paper") {
        return "You win! Scissors beats Paper"
    } else if (player == "paper" && computer == "rock") {
        return "You win! Paper beats Rock"
    } else if (player == "rock" && computer == "scissors") {
        return "You win! Rock beats Scissors"
    } else if (player == "scissors" && computer == "rock") {
        return "You lose! Rock beats Scissors"
    } else if (player == "paper" && computer == "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (player == "rock" && computer == "paper") {
        return "You lose! Paper beats Rock"
    } else {
        return "Make sure you enter either Rock, Paper or Scissors"
    }

}


