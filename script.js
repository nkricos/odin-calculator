//js code for odin-calulator
let firstNumber;
let operator;
let secondNumber;
let displayText = '0';

const displayOutput = document.querySelector('#display');
displayOutput.textContent = displayText;

const numberButtons = document.querySelectorAll('.numberButton');
const clearButton = document.querySelector('#clear');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => assignNumber(displayText, button.textContent))
});

clearButton.addEventListener('click', () => fullClear());

updateDisplay(displayText);

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