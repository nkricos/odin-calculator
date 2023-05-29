//js code for odin-calulator
let firstNumber;
let operator;
let secondNumber;
let displayText = '0';

let isFirstOperand = true;
let operatorPressed = false;

const displayOutput = document.querySelector('#display');
displayOutput.textContent = displayText;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clear');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => assignNumber(displayText, button.textContent))
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => displayText = '0')
});

clearButton.addEventListener('click', () => fullClear());
addButton.addEventListener('click', () => setOperator('+'));
//addButton.addEventListener('click', () => displayText = '0');
subtractButton.addEventListener('click', () => setOperator('-'));
multiplyButton.addEventListener('click', () => setOperator('*'));
divideButton.addEventListener('click', () => setOperator('/'));



updateDisplay(displayText);

function setOperator (symbol) {
    if (!operatorPressed) {
        isFirstOperand = !isFirstOperand;
        operatorPressed = !operatorPressed;
        return operator = symbol;
    }else return;
}

function fullClear() {
    updateDisplay('0');
}

function updateDisplay (display) {
    displayOutput.textContent = display;
    displayText = display;
    return displayText;
}

function assignNumber(display, number) {
    if (display.length >= 8) {
        return 0;
    }else if (display == '0') {
        display = number;
    } else {
        display += number;
    }  
    updateDisplay(display);
    if (isFirstOperand == true) {
        return firstNumber = parseFloat(display);
    }else {
        return secondNumber = parseFloat(display);
    }
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