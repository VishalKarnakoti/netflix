let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
  const options=["rock","papper","scissor"];
  const rankidx=Math.floor(Math.random()*3);
  return options[rankidx];
};
const drawGame=()=>{
  msg.innerText="The game is draw";
};
const showwinner=(userwin,userchoice,compchoice)=>{
  if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    msg.innerText=`You Win! Your ${userchoice}beats ${compchoice}`;
  }
  else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`You Lost ${compchoice} beats your ${userchoice}`;
  }

}
 const playgame=(userchoice)=>{
   const compchoice=gencompchoice();
    if(userchoice==compchoice){
    drawGame();
    }
    else{
      let userwin=true;
      if(userchoice==="rock"){
        //papper,scissor
        userwin=compchoice==="paper"?false:true;
      }
      else if(userchoice==="paper"){
        //rock,scissor
        userwin=compchoice==="scissor"?false:false;
      }
      else{
        //rock,papper
        userwin=compchoice==="rock"?false:true;
      }
      showwinner(userwin,userchoice,compchoice);
    }
 }

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    
    playgame(userchoice);
   
  })
})