const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const userGameWin = `You won ${playerScore} games and the computer won ${computerScore} games. You win!`;
const compGameWin = `You won ${playerScore} games and the computer won ${computerScore} games. You lose!`;

function playRound(e) {
    let playerSelection = e.srcElement.id;
    let computerSelection = gameOptions[Math.floor(Math.random() * (gameOptions.length))];
    let userRoundDefeat = `You picked ${playerSelection} and the computer picked ${computerSelection}. You lose the round!`;
    let userRoundVictory = `You picked ${playerSelection} and the computer picked ${computerSelection}. You win the round!`;
    let errorMessage = "User input is invalid. Please select Rock, Paper or Scissors.";
    let tieMessage = `You picked ${playerSelection} and the computer picked ${computerSelection}. The round is a tie!`;
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundVictory}`
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundVictory}`
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundVictory}`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundDefeat}`
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundDefeat}`
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        document.getElementById("results").innerHTML = `${userRoundDefeat}`
    } else if (playerSelection === computerSelection) {
        document.getElementById("results").innerHTML = `${tieMessage}`
    } else {
        document.getElementById("results").innerHTML = `${errorMessage}`
    }
    document.getElementById("score").innerText = `Player: ${playerScore} Computer: ${computerScore}`
    endGame();
};

const buttons = document.querySelectorAll('.choices');
buttons.forEach((btn) => {
    btn.addEventListener("click", playRound)
});

function endGame() {
    if (playerScore == 5) {
        document.getElementById("results").innerHTML = `Congratulations! You won five rounds! Pick again to start over.`;
        document.getElementById("score").innerText = `Your final score: ${playerScore} Computer Final Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        document.getElementById("results").innerHTML = `Oh no! The computer won five rounds! Pick again to start over.`
        document.getElementById("score").innerText = `Your final score: ${playerScore} Computer Final Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}