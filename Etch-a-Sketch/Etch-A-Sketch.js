//rainbow button must be first true or false and with a color before the event call.
let rainbow = false;
let rainbow_button=document.querySelector("#rainbow");
rainbow_button.style["background-color"] = "red";
rainbow_button.addEventListener("click",() => {
    rainbow=!rainbow; 
    color = rainbow ?  color="green" : color="red";
    rainbow_button.style["background-color"] = color;
});

//check pixel

let pixelCount_slider = document.querySelector("#pixels");
let pixelCount=pixelCount_slider.getAttribute("value");
let showCount= document.querySelector("#pixel-count");
showCount.textContent=pixelCount;

pixelCount_slider.addEventListener("input",()=>{
    pixelCount=pixelCount_slider.value;
    showCount.textContent=pixelCount;
    buildBoard(pixelCount);
});
document.querySelector("#delete").addEventListener('click',()=>{
    pixelCount=pixelCount_slider.value;
    showCount.textContent=pixelCount;
    buildBoard(pixelCount);
});

let drawBoard= document.querySelector(".draw-board");

function buildBoard(pixels_amount){
    let row;
let cellNum=0;
let cell;
    drawBoard.innerHTML = '';
  for(i=0;i<pixels_amount;i++){

    row = document.createElement("div");
    row.classList.add("lines");

    for(let j=0;j<pixels_amount;j++){
        cell = document.createElement("div");
        cell.classList.add("rows");
        cell.setAttribute('id', cellNum); 
        addToothBrushEvent(cell);
        cellNum++
        row.appendChild(cell);
    }
    
    
    drawBoard.appendChild(row);
    //for(j=0;j<pixels_amount;j++)[
     
    //]
  }
}

let click=false;


drawBoard.addEventListener('mousedown',() =>{
    click=true;
    console.log(click);
});
drawBoard.addEventListener('mouseup',() =>{
    click=false;
    console.log(click);
});

function addToothBrushEvent(cell_var){

let origin_color=String(cell_var.style["background-color"]);

cell_var.addEventListener('mouseover', () => {
cell_var.style["background-color"]="#696969";

    if(click){
    origin_color=getColor();
    cell_var.style["background-color"]=origin_color;
    }


});

cell_var.addEventListener("mouseout",() =>{
    cell_var.style["background-color"]=origin_color;
});

}


function getColor(){
    let rtnStr="#";
    if(rainbow){
        for(let i=0;i<6;i++){
            rtnStr+=String(Math.floor(Math.random()*10));
        }
    }
    else{
        rtnStr=document.querySelector(".color-picker").value;
     }
        
    
    return rtnStr;
}


