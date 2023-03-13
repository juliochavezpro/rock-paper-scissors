const gameOptions = ["Rock", "Paper", "Scissors"];
let playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// function that prompts user to make selection and saves it as PlayerSelection
function getPlayerChoice(Choice) {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice
}


// create function that selects computer selection from array and prompts user to type selection
function getComputerChoice(Choice) {
    const random = gameOptions[Math.floor(Math.random() * (gameOptions.length))];
    return random;
}

// code for round
function playRound(computerSelection, playerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return userRoundVictory;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return userRoundVictory;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return userRoundVictory;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return userRoundDefeat;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return userRoundDefeat;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return userRoundDefeat;
    } else if (playerSelection === computerSelection) {
        return tieMessage;
    }
}

// code for game of five rounds
function game() {

}

// create for loop that tracks rounds and ends game at five rounds

for (let i = 0; i < 5; i++) {
    // your code here!
}

// print game victory messages for computer and user
let userGameVictory = 'You won more rounds than the computer. You win!';
let userGameDefeat = 'You lost more rounds than the computer. You lose!';

// create round victory message for computer that prints user selection and computer selection
let userRoundDefeat = `You picked ${playerSelection} and the computer picked ${computerSelection}. You lose the round!`;

// create round victory message for user that prints user selection and computer selection
let userRoundVictory = `You picked ${playerSelection} and the computer picked ${computerSelection}. You win the round!`;

// create tie message
let tieMessage = `You picked ${playerSelection} and the computer picked ${computerSelection}. The round is a tie!`;

// create message if player input is invalid
let errorMessage = "User input is invalid. Please enter Rock, Paper or Scissors.";