function getRandomNumber(minNumber,maxNumber){
    let ranNum=Math.floor(Math.random() * maxNumber)+minNumber;
    return ranNum;

}

function getComputerChoice(minNumber1,maxNumber2){
    number = getRandomNumber(minNumber1,maxNumber2);
    if(number>3||number<1)
    throw "this is not correct:"+number;
switch(number){
    case 1: return "rock"; break;
    case 2: return "paper"; break;
    case 3: return "scissors"; break;
}
}

function playRound(playerSelection ,computerSelection){
    
    playerString = playerSelection.toLowerCase();
    computerString = computerSelection.toLowerCase();
    
    if(playerString==computerString)
    return "tie! you chose "+playerString+" and the computer chose "+computerString;
    // both of you and the computer have chosen "+computerString;



    win="you win! you chose "+playerString+" and the computer chose "+computerString;
    lose="you lose! you chose "+playerString+" and the computer chose "+computerString;
    

    checkRock=(computerString=="rock")
    checkPaper=(computerString=="paper");
    checkScissors=(computerString=="scissors");
    
switch(playerString){
    case "rock": if (checkScissors) return win; if(checkPaper) return lose;
    case "paper": if (checkRock) return win; if(checkScissors) return lose;
    case "scissors": if (checkPaper) return win; if(checkRock) return lose;
}
}

function game(){

//for(i=1;i<=rounds;i++){
  //  console.log(playRound(prompt("enter rock,paper or scissors"),getComputerChoice(1,3)));
    
//}
let condition="\n";
let playerScore=document.querySelector("h1#player-score");
let computerScore=document.querySelector("h1#computer-score");
//console.log(playerScore+"computerScore"+computerScore);
playerScore.textContent=0;
computerScore.textContent=0;

addEvents(playerScore,computerScore);
}


game();
const maxScore=5;
function addEvents(playerScore,computerScore){
let buttons = document.querySelectorAll(".button")
    buttons.forEach(button =>{
     button.addEventListener('click',() => {
        let choice=button.getAttribute('id');
        condition=(playRound(choice,getComputerChoice(1,3)));
        
        if(condition.includes("tie")){
            playerScore.textContent++;
            computerScore.textContent++;

        }
        else if((condition.includes("win"))){
            playerScore.textContent++;
                
        }
        else if((condition.includes("lose"))){
            computerScore.textContent++;
        }
        //condition=condition.replace("rock","<span>rock</span>");
       //condition=condition.replace("paper","<span>&#129704;</span>");
       // condition=condition.replace("scissors","<span>&#129704;</span>");
        document.querySelector("h1#condition").textContent=condition;
        condition="\n";
        
        
        if( playerScore.textContent>=maxScore||computerScore.textContent>=maxScore){
            
        stopGame(playerScore,computerScore);
        document.querySelector("h1#condition").textContent=condition;
        playerScore.textContent=0;
        computerScore.textContent=0;
        
        }
    });
    });
}
function stopGame(playerScore,computerScore){
let finish = playerScore.textContent > computerScore.textContent ? "congrats! you defeated the computer." : playerScore.textContent < computerScore.textContent ? "unfortunately, the computer won." : "both you and the computer are equal.";
document.querySelectorAll('#all').forEach(function(element){ element.style.display = 'none'});  
    // hide
   
    resEl=document.querySelector("#result");
    let h1 = document.createElement("h1");
    h1.textContent=playerScore.textContent+":"+ computerScore.textContent;
    let h1_second= document.createElement("h1");
    h1_second.textContent=finish;

    let btn = document.createElement("button");
    btn.innerHTML = "Try again";
    btn.addEventListener('click',()=> (location.reload()));
    resEl.appendChild(h1);
    resEl.appendChild(h1_second);

    resEl.appendChild(btn);


    resEl.classList.add("outContainer");

    
}


