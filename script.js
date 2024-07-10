
function getComputerChoice(){
    let number = Math.random();
    if (number <= (1/3)){
        choice = "rock";
    }
    else if (number > (1/3) && number <= (2/3)){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(){
    let humanChoice = prompt("What do you choose, mortal?").toLowerCase();
    while (humanChoice != "scissors" && humanChoice !="paper" && humanChoice !="rock"){
        humanChoice = prompt("WRONG!! You must choose either 'scissors' or 'rock' or 'paper'").toLowerCase();
        console.log(humanChoice);
    }

    return humanChoice; 
}
function playGame(){
    let humanScore=0
    computerScore=0;

    function playRound(humanChoice, computerChoice){
        console.log(computerChoice);
        if (humanChoice === "rock"){
            if (computerChoice==="scissors"){
                humanScore += 1;
                console.log("Human wins the round");
                return;
            }
            else if (computerChoice==="rock"){
                return
            }
            else{
                computerScore += 1;
                console.log("Computer wins the round");
                return;
            }
        }
        else if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
                humanScore += 1;
                console.log("Human wins the round");
                return;
            }
            else if(computerChoice==="scissors"){
                return;
            }
            else{
                computerScore += 1;
                console.log("Computer wins the round");
                return;
            }
        }
        else{
            if(computerChoice==="rock"){
                humanScore +=1;
                console.log("Human wins the round");
                return;
            }
            else if(computerChoice==="paper"){
                return;
            }
            else{
                computerScore += 1;
                console.log("Computer wins the round");
                return;
            }
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

}
playGame();


