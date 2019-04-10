 //CALCULATOR

let add = () => Number(a) + Number(b);

let substract = () => Number(a) - Number(b);

let multiply = () => Number(a) * Number(b);

let divide = () => Number(a) / Number(b);

function clickNum(num) {
  if(input == "") {
    display.value = num.innerHTML;
    input += num.innerHTML; 
  } else if (input != "") {
    display.value += num.innerHTML;
    input += num.innerHTML; 
  }
}

function clickOperator(operator, sign) {
  console.log(input);
  if(a != "" && input != "" && (oprt == add || oprt == substract || oprt == multiply || oprt == divide) ) {
    operate();
    oprt = operator;
    console.log(sign);
  } else {
    oprt = operator;
    display.value = sign;
    if(a == "" && input != "") {
      a = input;
      input = "";
      console.log(sign);
    } else if(a != "" && input == "") {
      display.value = sign;
      console.log(sign);
    } 
  }
}

function operate() {
  console.log(input);
  if(a == "" || input == "") {
    flashScreen();
  } else {
    b = input;                // to run operations
    display.value =  oprt(a, b); // on any two given numbers
    console.log(`result: ${display.value}`);
    a = display.value;
    input = ""
    b = "";
  }
}

function flashScreen() {
  console.log("Put flashScreen Code here!")
}

const container = document.getElementById("container"); //div holding all calculator inputs
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
const plus = document.getElementById("add");
const minus = document.getElementById("substract");
const mul = document.getElementById("multiply");
const div = document.getElementById("divide");
const backSpace = document.getElementById("bkS");
const clear = document.getElementById("clr");
const dot = document.getElementById("dot");
const equals = document.getElementById("eqls");
let display = document.querySelector("input"); //Shows calculator inputs and results

let a = ""; //holds first value for calculation
let b = ""; //holds second value for calculation
let oprt = ""; //temporarily holds current calculation operator
let input = ""; //temporarily holds calcutor input 
