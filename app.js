const choices=document.querySelectorAll(".choice");
const message=document.querySelector(".message");
const  userScorePara=document.querySelector("#user-score");
const  compScorePara=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

const genCompChoice=()=>{
  const options=["rock","paper","scissor"];
  const randomIdx=Math.floor(Math.random()*3);
  return options[randomIdx];
};

const drawGame=()=>{
  // console.log("game was a draw");
  message.innerText="Game was a draw .Play Again";
  message.style.backgroundColor="black";
};
const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    message.innerText=`You win!Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor="green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    message.innerText=`You lose!Your ${userChoice} is beaten by  ${compChoice}`;
    message.style.backgroundColor="red";
  }

};

//actual game
const playGame=(userChoice)=>{                     
  console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice===compChoice){
  drawGame();
}else{
  let userWin=true;
  if(userChoice==="rock"){
    userWin=compChoice==="paper"?false:true;

  }else if(userChoice==="paper"){
    userWin=compChoice==="scissors"?false:true;
  }
  else{
    userWin=compChoice==="rock"?false:true;
  }

showWinner(userWin,userChoice,compChoice);
}

};



choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);

  });
});
