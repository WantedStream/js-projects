const operatios={
    "+":function(a,b){return Number(a+b)}
    ,"-":function(a,b){return Number(a-b)}
    ,"*":function(a,b){return Number(a*b)}
    ,"/":function(a,b){return Number(a/b)}
};

let pastNum;
let currentOperator="";
let operators = ["AC","+/-","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,"𝜋",".","="];

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
let lastNum=NaN;
let lastOperator="";
function addEvents(buttonsdiv){
    let buttons = document.querySelectorAll(".line button");
    Array.from(buttons).forEach((button) => button.addEventListener("click",()=>{
        let currentTextContent=screen.textContent;
        let text=button.textContent;
        if(!isNaN(text)){
            if(currentTextContent==0||isNaN(currentTextContent)||lastOperator==""&&(lastNum!=NaN)){
                screen.textContent=text;

            }
            else{
                screen.textContent+=text;

            }

            if(lastOperator==""){
            lastNum=screen.textContent;
            }
        }
        else{

            if(lastOperator==""){
            lastOperator="+";
            screen.textContent=text;
            }
            else{
                let result = operatios[lastOperator](Number(lastNum),Number(currentTextContent));
                console.log(result+","+lastNum+","+currentTextContent);
                screen.textContent=result;
                lastNum=result;
                lastOperator="";
            }
           
        }
        console.log(lastOperator);
    }))
}

let screen=document.querySelector(".screen");
screen.textContent+=0;
buttonsdiv=document.querySelector(".buttons");
createButtons(buttonsdiv);
addEvents(buttonsdiv);
