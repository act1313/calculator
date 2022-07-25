let bottomDisplay = document.querySelector('.current');
let numbers = document.querySelectorAll('.number');
let clear = document.querySelector('.clear');
let operators = document.querySelectorAll('.operator');
let equals = document.querySelector('.equals');
let deleteKey = document.querySelector('.delete');
let num1 = '';
let num2 = '';
let answer = '';
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

function theCalculatorJuice(a, b, sign) {
    if (sign == 'x') {
        return multiply(a, b);
    } else if (sign == '+') {
        return add(a, b);
    } else if (sign == '-') {
        return subtract(a, b);
    } else if (sign == '÷') {
        return divide(a, b);
    } else {
        throw new Error('Invalid operator: ' + sign);
    }
}

function addBottomDisplay(num) {
    bottomDisplay.innerHTML = num;
}

function clearBottomDisplay() {
    bottomDisplay.innerHTML = "";
}

clear.addEventListener('click', () => {
    bottomDisplay.innerHTML = "";
    num1 = '';
    num2 = '';
    currentOperation = '';
});

deleteKey.addEventListener('click', () => {
    let bottom = bottomDisplay.innerHTML;
    let editBottom = bottom.slice(0, -1);

    bottomDisplay.innerHTML = editBottom;
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (num1 != '' && currentOperation != '') {
            num2 += number.innerHTML;
            addBottomDisplay(num2);
        } else {
            num1 += number.innerHTML;
            addBottomDisplay(num1);
        } 
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num2 == '') {
            currentOperation = operator.innerHTML;
        } else {
            let a = parseInt(num1);
            let b = parseInt(num2);
            answer = theCalculatorJuice(a, b, currentOperation);

            num1 = answer;
            num2 = '';

            bottomDisplay.innerHTML = answer;
            currentOperation = operator.innerHTML;
        }
    });
});

equals.addEventListener('click', () => {
    if (num2 != '') {
        let a = parseInt(num1);
        let b = parseInt(num2);
        answer = theCalculatorJuice(a, b, currentOperation);

        num1 = answer;
        num2 = '';

        bottomDisplay.innerHTML = num1;
    }
});