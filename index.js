let topDisplay = document.querySelector('.lastNumber');
let bottomDisplay = document.querySelector('.current');
let numbers = document.querySelectorAll('.number');
let clear = document.querySelector('.clear');
let operators = document.querySelectorAll('.operator');
let currentNumber = '';
let currentOperation = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) { 
    return a / b;
}

function operator(a, b, sign) {
    if (sign == '*') {
        multiply(a, b);
    } else if (sign == '+') {
        add(a, b);
    } else if (sign == '-') {
        subtract(a, b);
    } else if (sign == '/') {
        divide(a, b);
    } else {
        throw new Error('Invalid operator: ' + sign);
    }
}

function addBottomDisplay(num) {
    bottomDisplay.innerHTML = num;
}

function addTopDisplay(operator) {
    if (topDisplay.innerHTML != "") {
        topDisplay.innerHTML += " " + currentNumber + " " + operator;
    } else {
        topDisplay.innerHTML += currentNumber + " " + operator;
    }
}

function clearBottomDisplay() {
    bottomDisplay.innerHTML = "";
}

function clearTopDisplay() {
    topDisplay.innerHTML = " ";
}

clear.addEventListener('click', clearBottomDisplay());

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentNumber += number.innerHTML;
        addBottomDisplay(currentNumber);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperation = operator.innerHTML;
        addTopDisplay(currentOperation);
        clearBottomDisplay();
        currentNumber = '';
    });
});