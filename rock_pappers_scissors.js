const buttonRock = document.getElementById("rockBtn");
const buttonPapper = document.getElementById("papperBtn");
const buttonScissor = document.getElementById("scissorBtn");
const resultCont = document.getElementById("resultContainer");
const gameContainer = document.getElementById("game-container");
const buttonCont = document.getElementById("button-container");


buttonRock.addEventListener("click", playRound);
buttonPapper.addEventListener("click", playRound);
buttonScissor.addEventListener("click", playRound);



let scorePlayer = 0;
let scoreComputer = 0;
let tieScore = 0;


function rockChoice(){
    playerSelection = "rocks".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
}


function papperChoice(){
    playerSelection = "pappers".toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
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
        tieScore++;
    } else if ((playerSelection === "ROCKS" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPPERS") ||
    (playerSelection === "PAPPERS" && computerSelection === "ROCKS")){
        scorePlayer++;
    } else scoreComputer++;
    resultCont.innerHTML = "Score player = " + scorePlayer + "<br></br>" +
    "Score computer = " + scoreComputer + "<br></br>" +
    "Tie = " + tieScore;
    getWinner(scorePlayer, scoreComputer, tieScore);
    resetGame();
}


function getWinner(scorePlayer, scoreComputer, tieScore){
    if (scorePlayer === 5){
        resultCont.innerHTML = "Your score is = " + scorePlayer + "<br></br>" + 
        "The computer score is = " + scoreComputer + "<br></br>" + 
        "The amount of ties is = " + tieScore;
    }
    if (scoreComputer === 5){
        resultCont.innerHTML = "Your score is = " + scorePlayer + "<br></br>" + 
        "The computer score is = " + scoreComputer + "<br></br>" + 
        "The amount of ties is = " + tieScore;
    }
}


function showSelection(playerSelection, computerSelection){
    if (playerSelection === "ROCKS"){
        playerSelection = '<img src="./images/rock.svg" style="max-width:100%;, max-height:100%;" />';
    } else if (playerSelection === "PAPPERS"){
        playerSelection = '<img src="./images/papper.svg" style="max-width:100%;, max-height:100%;" />';
    } else playerSelection = '<img src="./images/scissor.svg" style="max-width:100%;, max-height:100%;" />';

    if (computerSelection === "ROCKS"){
        computerSelection = '<img src="./images/rock.svg" style="max-width:100%;, max-height:100%;" />';
    } else if (computerSelection === "PAPPERS"){
        computerSelection = '<img src="./images/papper.svg" style="max-width:100%;, max-height:100%;" />';
    } else computerSelection = '<img src="./images/scissor.svg" style="max-width:100%;, max-height:100%;" />';

    gameContainer.innerHTML = `<div class="gameContainer">${playerSelection}</div>` + " VS " + 
    `<div class="gameContainer">${computerSelection}</div>`;
}


function resetGame(){
    if (scorePlayer === 5){
        buttonCont.setAttribute('id', 'resetBtn');
        buttonCont.innerHTML = "Game is over!" + "<br></br>" + 
        "You win!" + "<br></br>" + 
        "Do you wanna restart?" + "<br></br>" + "<br></br>" + 
        `<a href="index.html" class="link">Restart</a>`;
    }

    if (scoreComputer === 5){
        buttonCont.setAttribute('id', 'resetBtn');
        buttonCont.innerHTML = "Game is over!" + "<br></br>" +
        "Computer wins!" + "<br></br>" + 
        "Do you wanna restart?" + 
        "<br></br>" + "<br></br>" + 
        `<a href="index.html" class="link">Restart</a>`;
    }
}





