//initialize variables - reset values for fullClear function
let currentNumber = 0;
let operator ='';
let displayNumber = 0;
let displayText = '0';
let secondNumberEntry = false;

const maxDsiplay = 8;
const largestValue = 99999999;
const smallestValue = -9999999;

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
    let isNegative = false;
    let filterString = currentNumber.toString();
    let filterArr = Array.from(String(currentNumber));

    //Err if number too large to fit 8 digit display
    if (currentNumber > largestValue || currentNumber < smallestValue){
        return 'Err';
    //adjust decimal numbers to fit display
    }else if (filterString.includes('e')) {
        return 'Err';
    }else if (filterString.includes('.')) {
        let decimalIndex = filterArr.findIndex( n => n == '.');
        let preDecimal = filterArr.slice(0, decimalIndex);
        let postDecimal = filterArr.slice(decimalIndex + 1);
        if (preDecimal[0] == '-') {
            isNegative = true;
            preDecimal.shift();
        }else isNegative = false
        while (preDecimal.length + postDecimal.length > maxDsiplay) {
            postDecimal.pop();
        }
        if (preDecimal.length + postDecimal.length == maxDsiplay) {
            postDecimal.pop()
        }
        if (postDecimal.includes(/[^0-9]/g)) {
            postDecimal = [];
        }
        let preDecimalDigits = Number(preDecimal.join(''));
        let allDigits = Number(preDecimal.join('') + '.' + postDecimal.join(''));
        if (preDecimal.length > maxDsiplay - 2) {
            return preDecimalDigits;
        }else if (isNegative == true) {
            return '-' + allDigits;
        }
        else {
            return allDigits;
        }
    }else return currentNumber;
}

function setOperator (symbol) {
    if (operator == '') {
        currentNumber = displayNumber;
    }else {
        currentNumber = operate(currentNumber, operator, displayNumber);
        displayOutput.textContent = filterDisplay(currentNumber);  
    }
    displayNumber = 0;
    secondNumberEntry = true;
    operator = symbol;
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
    //prevent overflow of display during data entry
    if (numberLength >= maxDsiplay || displayOutput.textContent == 'Err') {
        return 0;
    //keep display consistant entering decimal as first digit of an operator regardless of state    
    }else if (digit == '.' && (((displayText == '0' || displayText == '0.') && displayNumber == 0) || secondNumberEntry == true)) {
        displayOutput.textContent = '0.';
    }else if (displayOutput.textContent == '0' || secondNumberEntry == true) {
        displayOutput.textContent = `${digit}`;
    } else {
        displayText = displayOutput.textContent;
        displayOutput.textContent = `${displayText}` + `${digit}`;
        //prevent repeat entering of decimal point
        let decimalCounter = displayOutput.textContent.match(/\./g);
        if (decimalCounter) {
            if (decimalCounter.length > 1) {
                displayOutput.textContent = displayOutput.textContent.substring(0, displayOutput.textContent.length - 1);
            }
        }
    }
    secondNumberEntry = false;
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