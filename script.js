function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return(choice);
    
}

function numToPlay(num) {
    if(num === 0) {
        return("Rock");
    } else if(num === 1) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

function getHumanChoice() {
    let choice = prompt('\"Rock\", \"Paper\" or \"Scissors\"', "Rock")
    
        switch(choice.toLowerCase()) {
            case "rock":
                return(0);

            case "paper":
                return(1);

            case "scissors":
                return(2);
            default: 
                return(getHumanChoice());
        }

    
}

function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log(`You picked ${numToPlay(human)}, Computer picked ${numToPlay(computer)}`)
    switch(human) {
        case 0:
            if(computer == 1) {
                return(0);
            } else if(computer == 2) {
                return(1);
            } else {
                return(null);
            }
            break;

        case 1:
            if(computer == 2) {
                return(0);
            } else if(computer == 0) {
                return(1);
            } else {
                return(null);
            }
            break;
        
        case 2:
            if(computer == 0) {
                return(0);
            } else if(computer == 1) {
                return(1);
            } else {
                return(null);
            }
            break;
    }
}

function updateScore() {
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
}

let humanScore = 0;
let computerScore = 0;

let humanScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");

while((humanScore < 3) && (computerScore < 3)) {
    let round = playRound();
    if(round == 1) {
        humanScore++;
    } else {
        computerScore++;
    }
    updateScore();
}

if(humanScore == 3) {
    console.log("You win!!!");
} else {
    console.log("Computer wins...");
}