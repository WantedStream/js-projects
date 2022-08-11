//rainbow button must be first true or false and with a color before the event call.
let rainbow = false;
let rainbow_button=document.querySelector("#rainbow")
rainbow_button.style["background-color"] = "red";
rainbow_button.addEventListener("click",() => {
    rainbow=!rainbow; 
    color = rainbow ?  color="green" : color="red";
    rainbow_button.style["background-color"] = color;
    console.log(rainbow);
});
console.log(rainbow);

