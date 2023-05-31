//initialize variables
let currentNumber = 0;
let operator ='';
let displayNumber = 0;
let displayText = '0';

const displayOutput = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clear');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equals');
const decimalButton = document.querySelector('#decimal');

//initialize display
displayOutput.textContent = displayText;

//add event listeners to buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', () => assignNumber(button.textContent))
});

clearButton.addEventListener('click', () => fullClear());
addButton.addEventListener('click', () => setOperator('+'));
subtractButton.addEventListener('click', () => setOperator('-'));
multiplyButton.addEventListener('click', () => setOperator('*'));
divideButton.addEventListener('click', () => setOperator('/'));
equalButton.addEventListener('click', () => solve());

function solve() {
    if (operator == '') {
        return currentNumber = displayNumber;
    }
    currentNumber = operate(currentNumber, operator, displayNumber);
    displayNumber = currentNumber;
    operator = '';
    displayOutput.textContent = filterDisplay(currentNumber);
}

function filterDisplay(currentNumber) {
    let filteredString = currentNumber.toString();
    //filter string
    return filteredString;
}

function setOperator (symbol) {
    if (operator == '') {
        currentNumber = displayNumber;
        displayNumber = 0;
    }else {
        currentNumber = operate(currentNumber, operator, displayNumber);
        displayOutput.textContent = filterDisplay(currentNumber);
        displayNumber = 0;
    }
    operator = symbol;
}

function fullClear() {
    currentNumber = 0;
    displayNumber = 0;
    operator = '';
    displayOutput.textContent = '0';
}

function assignNumber(digit) {
    let numberLength = displayNumber.toString().length;
    if (numberLength >= 8 || (digit == '.' && displayOutput.textContent.includes('.'))) {
        return 0;
    }else if (displayNumber == 0) {
        displayOutput.textContent = `${digit}`;
    } else {
        displayText = displayOutput.textContent;
        displayOutput.textContent = `${displayText}` + `${digit}`;
    }
    displayNumber = parseFloat(displayOutput.textContent);
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