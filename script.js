 //CALCULATOR
let add = () => Number(a) + Number(b); 

let substract = () => Number(a) - Number(b);

let multiply = () => Number(a) * Number(b);

let divide = () => Number(a) / Number(b);

function clickNum(num) { //inputs "." and numbers into the calculator
  if(display.innerHTML.length < 12) { //limits max input and display to twelve characters
    if(input == "") { 
      display.innerHTML = num.innerHTML;
      input += num.innerHTML; 
    } else if (input != "") { 
      display.innerHTML += num.innerHTML;
      input += num.innerHTML; 
    }
  } else {
    flashScreen();
  }
}

function clickOperator(operator, sign) { //inputs operator into the calculator
  flashScreen();
  if(a != "" && input != "" && (oprt == add || oprt == substract || oprt == multiply || oprt == divide) ) {
    operate();
    oprt = operator;
  } else {
    oprt = operator;
    display.innerHTML = sign;
    if(a == "" && input != "") {
      a = input;
      input = "";
    } else if(a != "" && input == "") {
      display.innerHTML = sign;
    } 
  }
}

function operate() { //executes calculator operations
  flashScreen();
  if(a == "" || input == "") { 
    flashScreen(); //stops the calculator from bringing up error messages when equals to is pressed prematurely
  } else if(input == 0 && oprt == divide) { //guards against calculator crash
    display.innerHTML = `Smart ass eh? ${a} divide by zero is infinity!!!`
  } else {
    b = input;                
    display.innerHTML =  oprt(a, b); 
    display.innerHTML = display.innerHTML.substr(0, 12); //limits the display to twelve characters
    a = display.innerHTML;
    input = ""
    b = "";
  }
}

function clearScreen() { //reset everything
  a = "";
  b = "";
  oprt = "";
  input = "";
  display.innerHTML = 0;
}

function backSpace() { //deletes last input
  if(display.innerHTML.length == 1) {
    display.innerHTML = 0;
    input = "";
    flashScreen();
  } else {
    input = input.substring(0, input.length - 1);
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  }
}

function getSignKeys(e) { //avoids conflictions with "numKey"
  key = document.querySelector(`button[data-key = "${e.keyCode}"]`);  
  if(key) {
    key.onclick();
  } else{return;}
}

function inputDot() { //allows only one input of "."
  if(input.includes(".") || (display.innerHTML.includes(".")) ) {
    flashScreen(); 
  } else {
    clickNum(dot);
  } //end if
}

function flashScreen() { //indicates event occurrence
  display.style.backgroundColor = "red";
  setTimeout( () => {
    display.style.backgroundColor = "white"
  }, 3);
}

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const dot = document.querySelector("#dot");
const display = document.querySelector("p"); //Shows calculator inputs and results
const numKey = document.querySelectorAll(".key"); //gets keyboard number keys
const signKey = document.querySelectorAll(".sign"); //gets keyboard sign keys
const clear = document.querySelector("#clr");
let a = ""; //holds first value for calculation
let b = ""; //holds second value for calculation
let oprt = ""; //temporarily holds current calculation operator
let input = ""; //temporarily holds calcutor input 

numKey.forEach( () => this.addEventListener("keydown", () => this.onclick() ) );
signKey.forEach( () => this.addEventListener("keydown", getSignKeys ) );
dot.addEventListener("keydown", inputDot);
clear.addEventListener("keydown", clearScreen);