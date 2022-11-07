function getComputerChoice() {
    const min = 1;
    const max = 3;
    let randomOject = Math.floor(Math.random() * (max - min + 1) + min);
    let choice = "";
    if (randomOject == 1) {
        choice = "rock";
    }else if (randomOject == 2) {
        choice = "paper";
    }else if (randomOject == 3) {
        choice = "scissors";
    }
    return choice;
}

const playerSelection = "SCISSORS";
const computerSelection = getComputerChoice();
console.log(computerSelection)

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "rock") 
    || (playerSelection == "paper" && computerSelection == "paper") 
    || (playerSelection == "scissors" && computerSelection == "scissors")) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    }
}

console.log(playGame(playerSelection, computerSelection))