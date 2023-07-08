function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "×":
            return multiply(num1,num2);
        case "÷":
            if (num2 === 0 || num2 == null) return null
            else return divide(num1,num2);
        default:
            return null;
    }
}

function updateDisplay(){
    const currDisplay = document.querySelector(".screen-current");
    currDisplay.textContent = numValue;

    const prevDisplay = document.querySelector(".screen-last");
    if (operator != "" && prevNumValue != ""){
        prevDisplay.textContent = `${prevNumValue} ${operator}`
    } else {
        prevDisplay.textContent = prevNumValue;
    }
}

function appendNumber(e){
    const num = e.target.getAttribute('data-number');

    if (numValue.length > 16) return alert('Max Number of Digits Reached!');
    if (num === "." && numValue.includes(".")) return

    numValue += num;

    updateDisplay();
}

function getOperation(e){
    operator = e.target.getAttribute('data-operator');

    if (numValue == '') {
        updateDisplay();
        return;
    }
    if (prevNumValue != '') {
        prevNumValue = operate(operator, prevNumValue, numValue);
        numValue = '';
    } else {
    prevNumValue = numValue;
    numValue = '';
    }
    updateDisplay();
}

function evaluate(){
    if (isNaN(prevNumValue) || isNaN(numValue)) return;
    numValue = operate(operator, prevNumValue, numValue);
    if (numValue == null) {
        numValue = 'Cannot Divide by Zero';
        updateDisplay();
        numValue = '';
        return;
    }
    prevNumValue = '';
    operator = '';
    updateDisplay();
    numValue = '';
}

function clear(){
    numValue = '';
    prevNumValue = '';
    operator = '';
    updateDisplay();
}

function deleteNum(){
    numValue = numValue.substring(0,numValue.length-1);
    updateDisplay();
}

let numValue = '';
let prevNumValue = '';
let operator = '';

const numButtons = document.querySelectorAll("button[data-number]");
numButtons.forEach(numButton => numButton.addEventListener('click', appendNumber))

const operatorButtons = document.querySelectorAll("button[data-operator]");
operatorButtons.forEach( operatorButton => operatorButton.addEventListener('click', getOperation))

const operateButton = document.querySelector("button[data-operate]");
operateButton.addEventListener('click', evaluate);

const clearButton = document.querySelector(".clear")
clearButton.addEventListener('click', clear);

const deleteButton = document.querySelector(".delete")
deleteButton.addEventListener('click', deleteNum);