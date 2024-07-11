const pedra = document.querySelector('button[name="pedra"]');
const papel = document.querySelector("button[name='papel']");
const tesoura = document.querySelector("button[name='tesoura']");
const resultado = document.querySelector("p[name='resultado']");

let humanScore=0, computerScore=0;
function checaVencedor(){
    if (humanScore==5){
        resultado.textContent = "Você venceu!";
        humanScore = 0;
        computerScore = 0;
        return;
    }
    else if(computerScore==5){
        resultado.textContent = "Perdeu playboy! Computador venceu MUAHUAHUA";
        humanScore = 0;
        computerScore = 0;
        return;
    }
}
pedra.addEventListener("click", roundPedra);
papel.addEventListener("click", roundPapel);
tesoura.addEventListener("click", roundTesoura);

function displayResult(){
    humanScore+=1;
    resultado.textContent = `Sua escolha é pedra. O computador escolheu tesoura. Você: ${humanScore} Computador: ${computerScore}`;
    return;
}

/*
pedra.addEventListener("click", playRound("pedra", getComputerChoice()));
papel.addEventListener("click", playRound("papel", getComputerChoice()));
tesoura.addEventListener("click", playRound("tesoura", getComputerChoice()));
*/

function roundPedra(){
    opcaoComputador = getComputerChoice();
    if (opcaoComputador==="scissors"){
        humanScore += 1;
        console.log("Human wins the round");
        checaVencedor();
        resultado.textContent = `Sua escolha é pedra. O computador escolheu tesoura. Você: ${humanScore} Computador: ${computerScore}`;
        return;
    }
    else if (opcaoComputador==="rock"){
        resultado.textContent = `Sua escolha é pedra. O computador escolheu pedra também. Você: ${humanScore} Computador: ${computerScore}`;
        return;
    }
    else{
        computerScore += 1;
        resultado.textContent = `Sua escolha é pedra. O computador escolheu papel. Você: ${humanScore} Computador: ${computerScore}`;
        console.log("Computer wins the round");
        checaVencedor();
        return;
    }
}

function roundPapel(){
    opcaoComputador = getComputerChoice();
    if (opcaoComputador==="scissors"){
        computerScore += 1;
        console.log("Human wins the round");
        checaVencedor();
        resultado.textContent = `Sua escolha é papel. O computador escolheu tesoura. Você: ${humanScore} Computador: ${computerScore}`;
        return;
    }
    else if (opcaoComputador==="rock"){
        humanScore += 1;
        resultado.textContent = `Sua escolha é papel. O computador escolheu pedra. Você: ${humanScore} Computador: ${computerScore}`;
        checaVencedor();
        return;
    }
    else{
        resultado.textContent = `Sua escolha é papel. O computador escolheu papel também. Você: ${humanScore} Computador: ${computerScore}`;
        console.log("Computer wins the round");
        return;
    }
}

function roundTesoura(){
    opcaoComputador = getComputerChoice();
    if (opcaoComputador==="scissors"){
        console.log("Human wins the round");
        resultado.textContent = `Sua escolha é tesoura. O computador escolheu tesoura também. Você: ${humanScore} Computador: ${computerScore}`;
        return;
    }
    else if (opcaoComputador==="rock"){
        computerScore += 1;
        resultado.textContent = `Sua escolha é tesoura. O computador escolheu pedra. Você: ${humanScore} Computador: ${computerScore}`;
        checaVencedor();
        return;
    }
    else{
        resultado.textContent = `Sua escolha é tesoura. O computador escolheu papel. Você: ${humanScore} Computador: ${computerScore}`;
        humanScore += 1;
        checaVencedor();
        console.log("Computer wins the round");
        return;
    }
}

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
/*
function getHumanChoice(){
    while (humanChoice != "scissors" && humanChoice !="paper" && humanChoice !="rock"){
        humanChoice = prompt("WRONG!! You must choose either 'scissors' or 'rock' or 'paper'").toLowerCase();
        console.log(humanChoice);
    }

    return humanChoice; 
}
*/

function playRound(humanChoice, computerChoice){
    console.log(computerChoice);
    if (humanChoice === "rock"){
        if (computerChoice==="scissors"){
            humanScore += 1;
            console.log("Human wins the round");
            resultado.textContent = `Sua escolha é pedra. O computador escolheu tesoura. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
        else if (computerChoice==="rock"){
            resultado.textContent = `Sua escolha é pedra. O computador escolheu pedra também. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
        else{
            computerScore += 1;
            resultado.textContent = `Sua escolha é pedra. O computador escolheu papel. Você: ${humanScore} Computador: ${computerScore}`;
            console.log("Computer wins the round");
            return;
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            humanScore += 1;
            resultado.textContent = `Sua escolha é tesoura. O computador escolheu papel. Você: ${humanScore} Computador: ${computerScore}`;
            console.log("Human wins the round");
            return;
        }
        else if(computerChoice==="scissors"){
            resultado.textContent = `Sua escolha é tesoura. O computador escolheu tesoura também. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
        else{
            computerScore += 1;
            console.log("Computer wins the round");
            resultado.textContent = `Sua escolha é tesoura. O computador escolheu pedra. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
    }
    else if (humanChoice=="paper"){
        if(computerChoice==="rock"){
            humanScore +=1;
            console.log("Human wins the round");
            resultado.textContent = `Sua escolha é papel. O computador escolheu pedra. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
        else if(computerChoice==="paper"){
            resultado.textContent = `Sua escolha é papel. O computador escolheu papel também. Você: ${humanScore} Computador: ${computerScore}`;
            return;
        }
        else{
            computerScore += 1;
            resultado.textContent = `Sua escolha é papel. O computador escolheu tesoura. Você: ${humanScore} Computador: ${computerScore}`;
            console.log("Computer wins the round");
            return;
        }
    }
}

/*
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

*/
