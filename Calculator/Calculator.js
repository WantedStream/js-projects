const operatios={
    "+":function(a,b){return Number(a+b)}
    ,"-":function(a,b){return Number(a-b)}
    ,"*":function(a,b){return Number(a*b)}
    ,"/":function(a,b){return Number(a/b)}
};

let operation="";
let operators = ["AC","+/-","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,"𝜋",".","="];
let result="";
function createButtons(buttonsDiv){
    
    for(let i=0;i<5;i++){
        let line=document.createElement("div");
        line.classList.add("line");
        line.setAttribute("id", i);
        for(let j=0;j<4;j++){
            let button=document.createElement("button");
            let buttonContent=operators.shift();
            button.textContent=buttonContent;
            line.appendChild(button);
        }
        buttonsDiv.appendChild(line);
    }
}

function addEvents(buttonsdiv){
    let buttons = document.querySelectorAll(".line button");
    Array.from(buttons).forEach((button) => button.addEventListener("click",()=>{
        let currentTextContent=screen.textContent;
        let text=button.textContent;
        
       if(!isNaN(text)){
            placeNum(text,currentTextContent);
       }
       else if(text=="𝜋"||text=="+"||text=="-"||text=="*"||text=="/"||text=="%"||text=="SWITCH"){
            placeOperator(text,currentTextContent);
       }
       else if(text=="."){
            placeDot(text,currentTextContent);
       }
       else if(text=="AC"){
        location.reload();
       }
       else if(text=="+/-"){
            //changeMathSign(text,currentTextContent);
       }

       console.log(operation);
    }))
}

function placeNum(text,currentTextContent){
    if((currentTextContent==0&&!currentTextContent.includes("."))||currentTextContent=="𝜋"||currentTextContent=="+"||currentTextContent=="-"||currentTextContent=="*"||currentTextContent=="/"||currentTextContent=="%"||text=="SWITCH"){
        screen.textContent=text;
        if(text!=0){
            operation+=text;
        }
    }
    else{
        screen.textContent+=text;
        operation+=text;
    }
    
}
function placeOperator(text,currentTextContent){

    
    let lastIndexDot=(currentTextContent.slice(-1)==".");
    console.log(currentTextContent.slice(-1));
        if(!lastIndexDot){
        screen.textContent=text;
        if(text!=0){
            operation+=text;
        }
        }
    
    
}
function placeDot(text,currentTextContent){

    if(currentTextContent!=""&&!currentTextContent.includes(".")&&!isNaN(currentTextContent)){
        screen.textContent+=text;
        if(currentTextContent==0){
            operation+="0";
        }
        operation+=text;
    }
   
}

function changeMathSign(text,currentTextContent){
    operation="*-1"+operation;
    screen.textContent=currentTextContent*-1;
}
let screen=document.querySelector(".screen");
screen.textContent+=0;
buttonsdiv=document.querySelector(".buttons");
createButtons(buttonsdiv);
addEvents(buttonsdiv);

