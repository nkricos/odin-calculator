//initialize variables
let firstNumber = 0;
let operator;
let secondNumber = undefined;
let displayText = '0';
let isFirstOperand = true;
let operatorPressed = false;
let lockDisplay = false;

const displayOutput = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clear');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equals');

//initialize display
displayOutput.textContent = displayText;

//add event listeners to buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', () => assignNumber(displayText, button.textContent))
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => displayText = '0')
});

clearButton.addEventListener('click', () => fullClear());
addButton.addEventListener('click', () => setOperator('+'));
subtractButton.addEventListener('click', () => setOperator('-'));
multiplyButton.addEventListener('click', () => setOperator('*'));
divideButton.addEventListener('click', () => setOperator('/'));
equalButton.addEventListener('click', () => equalPressed());

function equalPressed() {
    if (operatorPressed == true) {
        evaluateCurrent();
        killSwitch();
    }
}

function killSwitch() {
    operator = undefined;
    operatorPressed = false;
}

function evaluateCurrent(){
        let newValue = operate(firstNumber, operator, secondNumber);
        updateDisplay(newValue);
        firstNumber = newValue;
        secondNumber = 0;
        //operator = undefined;   
}

function printVariables() {
    console.log(`isFirstOperand: ${isFirstOperand}`);
    console.log(`firstNumber: ${firstNumber}`);
    console.log(`secondNumber: ${secondNumber}`);
    console.log(`operatorPressed: ${operatorPressed}`);
    console.log(`operator: ${operator}`);
}

function convertToSN() {
    console.log(firstNumber.toExponential(4));
}

updateDisplay(displayText);

function setOperator (symbol) {
    if (!operatorPressed) {
        isFirstOperand = false;
        operatorPressed = !operatorPressed;
        
    }else {evaluateCurrent();}
    return operator = symbol;
}

function fullClear() {
    updateDisplay('0');
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    isFirstOperand = true;
    operatorPressed = false;
}

function updateDisplay (display) {
    //let overflow = display.length;
    //console.log('update display' + overflow);
    //console.log(typeof display);
    //console.log(displayText);
   // if (overflow > 8) {
        //display = display.toExponential(4);
        //lockDisplay = true;
   // }
  // if (firstNumber.toString().length > 8) {
   // displayOutput.textContent = display.toExponential(4);
  // }else {
    displayOutput.textContent = display;
  // }
  if(display.toString().length > 8) {
    console.log('hi, ' + display.length);
    displayOutput.textContent = display.toExponential(2);};
    
    console.log(display);
    displayText = display;
    //return displayText;
}

function assignNumber(display, number) {
    //operatorPressed = false;
    //let checkme = display.length;
    //console.log('assign number' + checkme);
    //console.log(typeof checkme);
    //console.log(displayText);
    if (display.length >= 8) {
        return 0;
    }else if (display == '0' || secondNumber == 0) {
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