//initialize variables
let currentNumber = 0;
let operator ='';
let displayNumber = 0;
let displayText = '0';
let secondNumberEntry = false;

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
        secondNumberEntry = true;
    }else {
        currentNumber = operate(currentNumber, operator, displayNumber);
        displayOutput.textContent = filterDisplay(currentNumber);
        displayNumber = 0;
    }
    operator = symbol;
    console.log(`currentNumber: ` + currentNumber);
    console.log(`displayNumer: ` + displayNumber);
    console.log(`secondNumberEntry: ` + secondNumberEntry);
    console.log(`operator: ` + operator);
    console.log(`displayOutput.textContent: `+ displayOutput.textContent);
    console.log(`displayText: ` + displayText + `\n\n`);
}

function fullClear() {
    currentNumber = 0;
    displayNumber = 0;
    displayText = '0'
    operator = '';
    displayOutput.textContent = '0';
    secondNumberEntry = false;
}

function assignNumber(digit) {
    let numberLength = displayNumber.toString().length;
    if (numberLength >= 8 /*|| (digit == '.' && displayOutput.textContent.includes('.'))*/) {
        return 0;
    }else if (digit == '.' && (((displayText == '0' || displayText == '0.') && displayNumber == 0) || secondNumberEntry == true)) {
        displayOutput.textContent = '0.';
       
        secondNumberEntry = false;
    }else if (displayOutput.textContent == '0' || secondNumberEntry == true) {
        displayOutput.textContent = `${digit}`;
        secondNumberEntry = false;
    } else {
        displayText = displayOutput.textContent;
        displayOutput.textContent = `${displayText}` + `${digit}`;
        let decimalCounter = displayOutput.textContent.match(/\./g);
        if (decimalCounter) {
            if (decimalCounter.length > 1) {
                displayOutput.textContent = displayOutput.textContent.substring(0, displayOutput.textContent.length - 1);
            }
        }
    }
    displayNumber = parseFloat(displayOutput.textContent);
    console.log(`currentNumber: ` + currentNumber);
    console.log(`displayNumer: ` + displayNumber);
    console.log(`secondNumberEntry: ` + secondNumberEntry);
    console.log(`operator: ` + operator);
    console.log(`displayOutput.textContent: `+ displayOutput.textContent);
    console.log(`displayText: ` + displayText + `\n\n`);
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