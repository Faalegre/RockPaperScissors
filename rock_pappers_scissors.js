const buttonRock = document.getElementById("rockBtn")
const buttonPapper = document.getElementById("papperBtn")
const buttonScissor = document.getElementById("scissorBtn")

buttonRock.addEventListener("click", playRound);
buttonPapper.addEventListener("click", playRound);
buttonScissor.addEventListener("click", playRound);


let scorePlayer = 0
let scoreComputer = 0
let tieScore = 0


function rockChoice(){
    playerSelection = "rocks".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    console.log(playerSelection)
    console.log(computerSelection)
}

function papperChoice(){
    playerSelection = "pappers".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    console.log(playerSelection)
    console.log(computerSelection)
}

function scissorChoice(){
    playerSelection = "scissors".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    console.log(playerSelection)
    console.log(computerSelection)
}


function getComputerChoice(){
    const x = Math.floor(Math.random()*4);
    if (x===3){
                return 'Rocks';
            } else if (x===2){
                return 'Pappers';
            } else {
                return 'Scissors';
            }
}


function playRound(){
    if (this.id ==="rockBtn"){
        rockChoice();
    } if (this.id ==="papperBtn"){
        papperChoice();
    } if (this.id ==="scissorBtn"){
        scissorChoice();
    }
    
    globalScores(playerSelection,computerSelection);
}

function globalScores(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        tieScore++
    } else if ((playerSelection === "ROCKS" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPPERS") ||
    (playerSelection === "PAPPERS" && computerSelection === "ROCKS")){
        scorePlayer++
    } else scoreComputer++;
    getWinner(scorePlayer, scoreComputer, tieScore)
}

function getWinner(scorePlayer, scoreComputer, tieScore){
    if (scorePlayer === 5){
        alert("You win! " + scorePlayer + " to " + scoreComputer + " and the tie score is " + tieScore)
    }
    if (scoreComputer === 5){
        alert("Computer wins " + scoreComputer + " to " + scorePlayer + " and the tie score is " + tieScore)
    } 
}




