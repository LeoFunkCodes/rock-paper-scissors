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

function playRound(player, computer) {
    console.log(`You picked ${player}, Computer picked ${computer}`)

    let win = whoWins(player, computer); 
    if(win == 1) {
        playerScore++;
    } else if(win == -1) {
        computerScore++;
    }
    console.log(`player: ${playerScore}, computer: ${computerScore}, win: ${win}`)

    if(playerScore > 2 || computerScore > 2) {
        if(playerScore > 2) {
            console.log("You win!!!");
        } else {
            console.log("Computer wins...");
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    const button = event.target;
    playRound(button.innerText, getComputerChoice())
})
