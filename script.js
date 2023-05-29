//js code for odin-calulator
let firstNumber;
let operator;
let secondNumber;
let displayValue = '0';

const displayOutput = document.querySelector('#display');
displayOutput.textContent = displayValue;

const pressOne = document.querySelector('#one');
pressOne.addEventListener('click', () => assignNumber(displayValue, '1'))

updateDisplay(displayValue);

function updateDisplay (display) {
    displayOutput.textContent = display;
    displayValue = display;
    return displayValue;
}



function assignNumber(display, number) {
    if (display == '0') {
        display = number;
    } else {
        display += number;
    }  
    updateDisplay(display);
}

function operate (num1, operand, num2) {
    switch(operand){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            break;
    }
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}