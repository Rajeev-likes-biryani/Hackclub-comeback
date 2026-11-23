  let score = {
    wins : 0,
    loses :0
  };

  function pickcomputermove(){
    const number = Math.random();

    let computerMove ='';
   
   if (number>0.5){
     computerMove = "heads"
   } else {
     computerMove = "tails"
   }
   return computerMove;
  }

  function playerMove(playerChoice){
    computerMove= pickcomputermove();
    let results = '';

    if (computerMove === playerChoice) {
      results = 'You Win!';
      score.wins++; 
    } else {
      results = 'You lose :(';
      score.loses++
    }


   document.querySelector('.result').innerHTML=`You chose <img class="small-coin" src="./games-pic/${playerChoice}.png">, computer chose <img class="small-coin" src="./games-pic/${computerMove}.png">, ${results}`;
   document.querySelector('.score').innerHTML=`Score: wins: ${score.wins}, loses: ${score.loses} `;
  }


let scoring = {
 wins : 0,
 ties: 0,
 losses:0
}

function computerChoice(){
   const number= Math.random();
   let computerMove = '';

   if (number < 1/3){
    computerMove = 'rock';
   } else if(number >1/3 && number < 2/3){
    computerMove = 'paper'
   } else {
    computerMove = 'scissors'
   }

   return computerMove;
}

function playerChoice (playerMove){
   const computerMove =computerChoice();
  let result=''

  if (playerMove === computerMove) {
    result= 'tie';
  } else if(playerMove === 'rock' && computerMove === 'scissors') {
    result = 'win'
  } else if (playerMove === 'rock' && computerMove === 'paper') {
    result = 'loss'
  }

    if (playerMove === computerMove) {
    result= 'tie';
  } else if(playerMove === 'paper' && computerMove === 'rock') {
    result = 'win'
  } else if(playerMove === 'paper' && computerMove === 'scissors') {
    result = 'loss'
  }
 
    if (playerMove === computerMove) {
    result= 'tie';
  } else if(playerMove === 'scissors' && computerMove === 'paper') {
    result = 'win'
  } else if (playerMove === 'scissors' && computerMove === 'rock') {
    result = 'loss'
  }

  if (result === 'win') {
    scoring.wins++
  } else if(result === 'tie'){
    scoring.ties++
  } else {
    scoring.losses++
  }

document.querySelector('.game-2-result').innerHTML=`result =${result},computer chose <img class="game-2-button-logo-small" src="./games-pic/${computerMove}.png">, You chose <img class="game-2-button-logo-small" src="./games-pic/${playerMove}.png">`;
document.querySelector('.game-2-score').innerHTML=`Score: wins: ${scoring.wins}, loses: ${scoring.losses}, ties: ${scoring.ties} `
}

let playerO = 'O';
let playerX = 'X';

let currentPlayer = playerO;

let gameBoard = ["","","","","","","","",""];
let gameCells;

let winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

let gameOver = false;

window.onload = function(){
 gameCells= document.getElementsByClassName("game-cell");    
    for( let cell of gameCells) {
        cell.addEventListener("click", placeCell);
    };

  restartGameButton= document.getElementById("restart-game-3");
  restartGameButton.addEventListener("click", restartGame);
}

function placeCell () {

   if (gameOver == true){
    return;
   } 
    
   const index = parseInt(this.getAttribute("data-cell-index"))

   if (gameBoard[index] != "") {
    return;
   }

    this.innerText = currentPlayer;
    gameBoard[index] = currentPlayer;
    
    currentPlayer = (currentPlayer == playerO) ? playerX : playerO;

    checkWinner();
}

function checkWinner() {
  for (winCondition of winningConditions){
    let a = gameBoard[winCondition[0]];
    let b = gameBoard[winCondition[1]];
    let c = gameBoard[winCondition[2]];

    if (a == b && b ==c && a!= ""){
        for( i=0; i < gameBoard.length; i++) {
            if(winCondition.includes(i)) {
                gameCells[i].classList.add("winning-game-cell");
            }
        }
        gameOver= true;
        return;
    }
  }
}

function restartGame (){
  gameOver = false;
  gameBoard = ["","","","","","","","",""];
  for (let cell of gameCells){
    cell.innerText="";
    cell.classList.remove("winning-game-cell");
  }
}


function enableHoverGlow(wrapper,brightlayer){
  wrapper.addEventListener('mousemove',(e) => {
    const rect =brightlayer.getBoundingClientRect();
    const mx =e.clientX - rect.left;
    const my =e.clientY - rect.top;
    brightlayer.style.setProperty('--mx', mx+'px');
    brightlayer.style.setProperty('--my', my+'px');
  }
)}

enableHoverGlow(
  document.getElementById('asciiwrap'),
  document.querySelector('.coin-bright')
);

enableHoverGlow(
  document.getElementById('asciiwrap2'),
  document.querySelector('.rock-bright')
);

enableHoverGlow(
  document.getElementById('asciiwrap3'),
  document.querySelector('.tic-tac-toe-bright')
);