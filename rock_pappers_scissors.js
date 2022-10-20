const buttonRock = document.getElementById("rockBtn");
const buttonPapper = document.getElementById("papperBtn");
const buttonScissor = document.getElementById("scissorBtn");
const resultCont = document.getElementById("resultContainer");
const gameContainer = document.getElementById("game-container");

buttonRock.addEventListener("click", playRound);
buttonPapper.addEventListener("click", playRound);
buttonScissor.addEventListener("click", playRound);


let scorePlayer = 0
let scoreComputer = 0
let tieScore = 0


function rockChoice(){
    playerSelection = "rocks".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
}

function papperChoice(){
    playerSelection = "pappers".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase()
}

function scissorChoice(){
    playerSelection = "scissors".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
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
    showSelection(playerSelection, computerSelection);
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
    resultCont.innerHTML = "Score player = " + scorePlayer + "<br/><br/>" +
    "Score computer = " + scoreComputer + "<br/><br/>" +
    "Tie = " + tieScore;
    getWinner(scorePlayer, scoreComputer, tieScore)
}

function getWinner(scorePlayer, scoreComputer, tieScore){
    if (scorePlayer === 5){
        resultCont.innerHTML = "You win! " + "<br/><br/>" + "Your score is = " + scorePlayer + "<br/><br/>" 
        + "The computer score is = " + scoreComputer + "<br/><br/>" + "The amount of ties is = " + tieScore;
    }
    if (scoreComputer === 5){
        resultCont.innerHTML = "Computer wins! " + "<br/><br/>" + "Your score is = " + scorePlayer + "<br/><br/>" 
        + "The computer score is = " + scoreComputer + "<br/><br/>" + "The amount of ties is = " + tieScore;
    } 
}

function showSelection(playerSelection, computerSelection){
    if (playerSelection === "ROCKS"){
        playerSelection = '<img src="./images/rock.svg" style="width:200px; height:200px;" />'
    } else if (playerSelection === "PAPPERS"){
        playerSelection = '<img src="./images/papper.svg" style="width:200px; height:200px;" />'
    } else playerSelection = '<img src="./images/scissor.svg" style="width:200px; height:200px;" />'

    if (computerSelection === "ROCKS"){
        computerSelection = '<img src="./images/rock.svg" style="width:200px; height:200px;" />'
    } else if (computerSelection === "PAPPERS"){
        computerSelection = '<img src="./images/papper.svg" style="width:200px; height:200px;" />'
    } else computerSelection = '<img src="./images/scissor.svg" style="width:200px; height:200px;" />'

    gameContainer.innerHTML = playerSelection + " VS " + computerSelection
}




