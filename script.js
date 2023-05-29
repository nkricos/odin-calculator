//js code for odin-calulator
let firstNumber;
let operator;
let secondNumber;
let displayValue = 12345678;

const displayOutput = document.querySelector('#display');
displayOutput.textContent = `${displayValue}`;

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