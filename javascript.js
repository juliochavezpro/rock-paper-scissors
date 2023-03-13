console.log("Hello World!");

const gameOptions = ["Rock", "Paper", "Scissors"];
let playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice(rock, paper, scissors) {
    return this[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(computerSelection, playerSelection) {

}

function game () {
    prompt("Rock, Paper or Scissors?", "")
}