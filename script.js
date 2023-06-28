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

function updateDisplayValue(num){
    const display = document.querySelector(".screen-current")
    display.textContent = num;
}

function getNumInput(e){
    const num = e.target.getAttribute('data-number');
    numValue += num;
    updateDisplayValue(numValue);
}

let numValue = '';

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', getNumInput))

