console.log("Hello world!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return(choice);
    
}

function getHumanChoice() {
    let choice = prompt('\"Rock\", \"Paper\" or \"Scissors\"', "Rock")
    
        switch(choice) {
            case "Rock":
                return(0);

            case "Paper":
                return(1);

            case "Scissors":
                return(2);
            default: 
                return(getHumanChoice());
        }

    
}

let humanscore = 0;
let computerscore = 0;
console.log(getHumanChoice());