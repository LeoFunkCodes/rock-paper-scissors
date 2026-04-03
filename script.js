function whoWins(player, computer) {
    if(player == computer) {
        return(0);
    }
    
    switch(player) {
        case "Rock":
            if(computer == "Paper") {
                return(-1);
            } else {
                return(1);
            }
        case "Paper":
            if(computer == "Scissors") {
                return(-1);
            } else {
                return(1);
            }
        case "Scissors":
            if(computer == "Rock") {
                return(-1);
            } else {
                return(1);
            }
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: 
            return("Rock");
        case 1: 
            return("Paper");
        case 2: 
            return("Scissors");
        default:
            return `Error, computer choice is ${choice}`;
    }
}

function updateScoreboard() {
    playerScoreDisplay.innerText = `Your score: ${playerScore}`;
    computerScoreDisplay.innerText = `Computer score: ${computerScore}`;
}

function playRound(player, computer) {
    console.log(`You picked ${player}, Computer picked ${computer}`)

    let win = whoWins(player, computer); 
    if(win == 1) {
        playerScore++;
        updateScoreboard();
    } else if(win == -1) {
        computerScore++;
        updateScoreboard();
    }

    if(playerScore > 2 || computerScore > 2) {
        if(playerScore > 2) {
            winDisplay.innerText = "You win!!!";
        } else {
            winDisplay.innerText = "Computer wins...";
        }
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;
const winDisplay = document.querySelector("#winner");
const buttons = document.querySelector("#buttons");
const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");
const recentRound = document.querySelector("#recentround");

buttons.addEventListener("click", (event) => {
    const button = event.target;
    playRound(button.innerText, getComputerChoice())
})
