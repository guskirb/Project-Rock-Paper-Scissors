const playerSelection = "";
const computerSelection = getComputerChoice();
const scoreboard = document.getElementById("score");
const compScore = document.getElementById("compScore")
let myscore = 0;
let pcscore = 0;
const round = document.getElementById("round");
const myZone = document.getElementById("myZone")
const pcZone = document.getElementById("pcZone")

function addPaper(destination) {
    const img = document.getElementById(destination);
    destination.src = "/pics/paper.png";
}

function addRock(destination) {
    const img = document.getElementById(destination);
    destination.src = "/pics/rock.png";
}

function addScissors(destination) {
    const img = document.getElementById(destination);
    destination.src = "/pics/scissors.png";
}


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
        if (playerSelection == "rock") {
            addRock(myImage);
            addRock(pcImage);
        } if (playerSelection == "paper") {
            addPaper(myImage);
            addPaper(pcImage);
        } if (playerSelection == "scissors") {
            addScissors(myImage);
            addScissors(pcImage);
        };
        round.textContent = "DRAW";
    } else if (player == "scissors" && computer == "paper") {
        addScissors(myImage);
        addPaper(pcImage);
        round.textContent = "ROUND WON";
        return ++myscore;
    } else if (player == "paper" && computer == "rock") {
        addPaper(myImage);
        addRock(pcImage);
        round.textContent = "ROUND WON";
        return ++myscore;
    } else if (player == "rock" && computer == "scissors") {
        addRock(myImage);
        addScissors(pcImage);
        round.textContent = "ROUND WON";
        return ++myscore
    } else if (player == "scissors" && computer == "rock") {
        addScissors(myImage);
        addRock(pcImage);
        round.textContent = "ROUND LOST";
        return ++pcscore
    } else if (player == "paper" && computer == "scissors") {
        addPaper(myImage);
        addScissors(pcImage);
        round.textContent = "ROUND LOST";
        return ++pcscore
    } else if (player == "rock" && computer == "paper") {
        addRock(myImage);
        addPaper(pcImage);
        round.textContent = "ROUND LOST";
        return ++pcscore
    } else {
        return "Make sure you type either Rock, Paper or Scissors!"
    }

};

function playGame(playerSelection) {
    console.log(playRound(playerSelection, getComputerChoice()));
    scoreboard.innerText = myscore;
    compScore.innerText = pcscore;
    round.style.color = "black";
    round.style.backgroundColor = null;
    round.style.boxShadow = null;
    if (myscore >= 5) {
        round.style.color = "white";
        round.style.backgroundColor = "blue";
        round.style.boxShadow = "#0000ff65 -3px 3px, #0000ff46 -5px 5px";
        round.innerText = "YOU WIN";
        myscore = 0;
        pcscore = 0;
    } if (pcscore >= 5) {
        round.style.color = "white";
        round.style.backgroundColor = "red";
        round.style.boxShadow = "#ff000065 3px 3px, #ff000046 5px 5px";
        round.innerText = "YOU LOSE";
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



