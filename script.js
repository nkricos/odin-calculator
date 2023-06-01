//initialize variables - reset values for fullClear function
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
    console.log(currentNumber);
}

function filterDisplay(currentNumber) {
    let isNegative = false;
    let filterString = currentNumber.toString();
    let filterArr = Array.from(String(currentNumber));
    //console.log(filteredString.length);
    
    if (currentNumber > 99999999 || currentNumber < -9999999){
        return 'Err';
    }else if (filterString.includes('.')) {
        let decimalIndex = filterArr.findIndex( n => n == '.');
        let preDecimal = filterArr.slice(0, decimalIndex);
        let postDecimal = filterArr.slice(decimalIndex + 1);
        if (preDecimal[0] == '-') {
            isNegative = true;
            preDecimal.shift();
            console.log(preDecimal);
        }else isNegative = false
        while (preDecimal.length + postDecimal.length > 7) {
            postDecimal.pop();
            console.log(postDecimal);
        }
        console.log(preDecimal);
        let preDecimalDigits = Number(preDecimal.join(''));
        let postDecimalDigits = Number(postDecimal.join(''));
        console.log(`predif` + preDecimalDigits);
        if (preDecimal.length > 6) {
            return preDecimalDigits;
        }else if (isNegative == true) {
            return '-' + preDecimalDigits + '.' + postDecimalDigits;
        }
        else {
            return preDecimalDigits + '.' + postDecimalDigits;
        }

        console.log(filterArr);
        console.log(decimalIndex);
        console.log(preDecimal);
        console.log(postDecimal);
        return 'Coming Soon';
    }else return currentNumber;
   // while (filteredString.length > 8 && filteredString.includes('.')) {
       // filteredString = filteredString.slice(0, filteredString.length - 1);
        //console.log(`fil1: ` + filteredString);
   // }
    
   // if (filteredString.length > 8 || filteredString < 0.000001) {
        //return filteredString = 'Err';
   // }else return filteredString;
        
        //filteredString = 'error';
        //console.log(`fil2: ` + filteredString);
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
    console.log(currentNumber);
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
    if (numberLength >= 8 || displayOutput.textContent == 'Err') {
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
    console.log(currentNumber);
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