function whoWins(player, computer) {
    if(player == computer) {
        return(0);
    }
    
    switch(player) {
        case "rock":
            if(computer == "paper") {
                return(-1);
            } else {
                return(1);
            }
        case "paper":
            if(computer == "scissors") {
                return(-1);
            } else {
                return(1);
            }
        case "scissors":
            if(computer == "rock") {
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
            return("rock");
        case 1: 
            return("paper");
        case 2: 
            return("scissors");
        default:
            return `Error, computer choice is ${choice}`;
    }
}

function getPlayerChoice() {
    let choice = prompt('\"Rock\", \"Paper\" or \"Scissors\"', "Rock")
    
        switch(choice.toLowerCase()) {
            case "rock":
                return("rock");

            case "paper":
                return("paper");

            case "scissors":
                return("scissors");
            default: 
                return(getPlayerChoice());
        }

    
}

function playRound(player, computer) {
    console.log(`You picked ${player}, Computer picked ${computer}`)
    return(whoWins(player, computer));
}

function playGame() {
    // while((playerScore < 3) && (computerScore < 3)) {
        let win = playRound(getPlayerChoice(), getComputerChoice());
        if(win == 1) {
            playerScore++;
        } else if(win == -1) {
            computerScore++;
        }
    // }

    if(playerScore > computerScore) {
        console.log("You win!!!");
    } else {
        console.log("Computer wins...");
    }
}



let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    // do something
})


playGame();