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

document.querySelector('.game-2-result').innerHTML=`result =${result},computer: ${computerMove}`;
}