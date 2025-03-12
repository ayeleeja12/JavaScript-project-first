let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins:0,
  loses:0,
  ties:0
};

updateScoreElement();

/*  if(!score){
score = {
  wins:0,
  loses:0,
  ties:0
};
} */


function playGame(playerMove){
const computerMove = pickComputerMove();
let result ='';

if(playerMove === `rock`){
if(computerMove === `rock`){
  result = 'tie';
} else if (computerMove === `Paper`){
  result = 'you win';
} else if (computerMove === 'Scissors'){
  result = 'you lose';
}

}  else if(playerMove === `Paper` ) { 
if(computerMove === `rock`){
  result = 'you win';
} else if (computerMove === `Paper`){
  result = 'tie';
} else if (computerMove === 'Scissors'){
  result = 'you lose';
}

} else if (playerMove === `Scissors`){
if(computerMove === `rock`){
  result = 'you lose';
} else if (computerMove === `Paper`){
  result = 'you win';
} else if (computerMove === 'Scissors'){
  result = 'tie';
} 
}  

if(result === `you win`){
  score.wins +=1;
}if(result=== `you lose`){
  score.loses +=1;
} if (result === `tie`){
  score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML= `${result}`;

document.querySelector('.js-move')
.innerHTML=`you 
<img src="images/${playerMove}-emoji.png" class="move">
<img src="images/${computerMove}-emoji.png" class="move">
Computer`;


  // return(alert(`you picked ${playerMove}. Computer picked ${computerMove}. ${result}
  //        wins: ${score.wins},, loses: ${score.loses},, ties: ${score.ties}`));
}


function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`;

}

// function updateMove(){
//   document.querySelector('.js-move')
//   .innerHTML=`you ${playerMove}. Computer ${computerMove}`;
// }

// function updateResult(){
// document.querySelector('.js-result')
//   .innerHTML= `${result}`;
// }

function pickComputerMove(){
let computerMove = '';
let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3 ) {
      computerMove = `rock`; 

    } else if (randomNumber >= 1/3 && randomNumber < 2 / 3) {
    computerMove = `Paper`;

    } else if (randomNumber >=2/ 3 && randomNumber < 1) {
      computerMove = `Scissors`;
    }

return computerMove;
}
