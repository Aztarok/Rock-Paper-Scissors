let playerScore = 0;
let computerScore = 0;
let button = document.querySelectorAll('.btn');
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

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "rock") 
    || (playerSelection == "paper" && computerSelection == "paper") 
    || (playerSelection == "scissors" && computerSelection == "scissors")) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        document.querySelector('.player-score').innerHTML = `Player Score: ${playerScore}`; 
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        document.querySelector('.comp-score').innerHTML = `Player Score: ${computerScore}`;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        document.querySelector('.player-score').innerHTML = `Player Score: ${playerScore}`; 
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        document.querySelector('.comp-score').innerHTML = `Player Score: ${computerScore}`;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        document.querySelector('.player-score').innerHTML = `Player Score: ${playerScore}`; 
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        document.querySelector('.comp-score').innerHTML = `Player Score: ${computerScore}`;
        return "You Lose! Scissors beats Paper";
    }
}

function checkEnd(pScore, cScore) {
    if(pScore === 5) {
        document.querySelector('.winner').innerHTML = "Winner is the Player!";
        document.querySelectorAll('[data-name]')[0].disabled = true;
        document.querySelectorAll('[data-name]')[1].disabled = true;
        document.querySelectorAll('[data-name]')[2].disabled = true;
    } else if(cScore === 5) {
        document.querySelector('.winner').innerHTML = "Winner is the Computer!";
        document.querySelectorAll('[data-name]')[0].disabled = true;
        document.querySelectorAll('[data-name]')[1].disabled = true;
        document.querySelectorAll('[data-name]')[2].disabled = true;
    }
}



function game(value) {
    const computerSelection = getComputerChoice();
    document.querySelector('.result').innerHTML += `<br> ${playGame(value, computerSelection)}`;
}


button.forEach(button => button.addEventListener('click', (e) => {
    let value = button.dataset.name;
    game(value);
    checkEnd(playerScore, computerScore);
}));
