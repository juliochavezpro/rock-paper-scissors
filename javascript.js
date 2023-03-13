const gameOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = gameOptions[Math.floor(Math.random() * (gameOptions.length))];
    let userRoundDefeat = `You picked ${playerSelection} and the computer picked ${computerSelection}. You lose the round!`;
    let userRoundVictory = `You picked ${playerSelection} and the computer picked ${computerSelection}. You win the round!`;
    let errorMessage = "User input is invalid. Please enter Rock, Paper or Scissors.";
    let tieMessage = `You picked ${playerSelection} and the computer picked ${computerSelection}. The round is a tie!`;
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        let playerScore = ++playerScore;
        return userRoundVictory;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        return userRoundVictory;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        return userRoundVictory;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        return userRoundDefeat;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        return userRoundDefeat;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        return userRoundDefeat;
    } else if (playerSelection === computerSelection) {
        return tieMessage;
    } else {
        return errorMessage;
    }
}

function game() {
    let userGameVictory = `You won ${playerScore} rounds and the computer won ${computerScore} rounds. You win!`;
    let userGameDefeat = `You won ${playerScore} rounds and the computer won ${computerScore} rounds. You lose!`;
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
        if (playerScore > computerScore) {
            return userGameVictory;
        } else {
            return userGameDefeat; 
        }
    }
}