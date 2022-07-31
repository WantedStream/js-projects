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

function game(rounds){

for(i=1;i<=rounds;i++){
    console.log(playRound(prompt("enter rock,paper or scissors"),getComputerChoice(1,3)));
    
}

}
game(10);