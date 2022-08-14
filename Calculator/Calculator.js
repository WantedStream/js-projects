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

let numbers=[];
function doOperations(){
  
   if(numbers.length>=4){
   let result =operatios[numbers[1]](Number(numbers[0]),Number(numbers[2]));
   screen.textContent=result;
   numbers.shift();
   numbers.shift();
   numbers.shift();
   numbers.unshift(result);
   console.log(numbers);
   }
}
function addOperator(text,currentTextContent){
    
    numbers.push(currentTextContent);
    numbers.push(text);
    
    operation="";
}

function addEvents(buttonsdiv){
    let buttons = document.querySelectorAll(".line button");
    Array.from(buttons).forEach((button) => button.addEventListener("click",()=>{
        let currentTextContent=screen.textContent;
        let text=button.textContent;
        const PI=3.14;
       if(!isNaN(text)){
            placeNum(text,currentTextContent);
       }
       else if(text=="+"||text=="-"||text=="*"||text=="/"||text=="(SWITCH SIGN)"){
           
            placeOperator(text,currentTextContent);
           
       }
       else if(text=="."||text=="𝜋"){
        if(text=="𝜋"){
            text=PI;
        }
            placeDot(text,currentTextContent);
       }
       else if(text=="AC"){
        location.reload();
       }
       else if(text=="+/-"){
        screen.textContent=currentTextContent*-1;
       }
       else if(text=="%"){
        screen.textContent=currentTextContent*0.01;
       }
       else if(text=="="){
        if(numbers!=[]){
        let result =operatios[numbers[1]](Number(numbers[0]),Number(currentTextContent));
        screen.textContent=result;
        numbers=[];
       // numbers.push(result);
       // console.log(result +" equals")
        }
       }

       doOperations();
       console.log(operation);
    }))
}

function placeNum(text,currentTextContent){
    if((currentTextContent==0&&!currentTextContent.includes("."))||currentTextContent=="𝜋"||currentTextContent=="+"||currentTextContent=="-"||currentTextContent=="*"||currentTextContent=="/"||currentTextContent=="(SWITCH SIGN)"||currentTextContent==(numbers[0])){
        screen.textContent=text;
    }
    else{
        screen.textContent+=text;
  
    }
    
}
function placeOperator(text,currentTextContent){

    
    let lastIndexDot=(currentTextContent.slice(-1)==".");
    //console.log(currentTextContent.slice(-1));
        if(!lastIndexDot){
        screen.textContent=text;
        if(text!=0){
            addOperator(text,currentTextContent);
        }
        }
    
    
}
function placeDot(text,currentTextContent){

    if(currentTextContent!=""&&!currentTextContent.includes(".")&&!isNaN(currentTextContent)){
        screen.textContent+=text;
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

