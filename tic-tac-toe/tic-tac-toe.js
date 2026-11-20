let playerO= "O";
let playerX= "X";

let currentPlayer = playerO;

let gameBoard = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,""];
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
];

let gameOver= false;

let restartGameButton;

window.onload = function() {
    gameCells = document.getElementsByClassName("game-cell");
    for (let cell of gameCells){
        cell.addEventListener("click", placecell);
    }

    restartGameButton = document.getElementById("game-reset");
    restartGameButton.addEventListener('click', restartGame);
}

function placecell() {
   
    if (gameOver) {
        return;
    }

    const index = parseInt(this.getAttribute("data-cell-index"));
    
    if (gameBoard[index] != "") {
        return;
    }
  
    this.innerText= currentPlayer;
    gameBoard[index] = currentPlayer;

    currentPlayer = (currentPlayer == playerO) ? playerX : playerO;
  
    checkWinnner();
}

function checkWinnner(){
   for (let winCondition of winningConditions) {
      let a = gameBoard[winCondition[0]];
      let b = gameBoard[winCondition[1]];
      let c = gameBoard[winCondition[2]];

      if (a == b && b == c && a != "") {
        for (i = 0; i < gameBoard.length; i++) {
            if (winCondition.includes(i)){
                gameCells[i].classList.add("winning-game-cell");
            }
        }
       gameOver = true;
       return;
      }
}
}

function restartGame(){
    gameOver= false;
    gameBoard = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,""];
    for (let cell of gameCells) {
        cell.innerText= "";
        cell.classList.remove("winning-game-cell")
    }
}