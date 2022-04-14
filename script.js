let displayValue;
let firstNumber;
const btnDigit = document.querySelectorAll('.btn-digit');
const btnOperator = document.querySelectorAll('.btn-operator');
// const btnAdd = document.querySelector('.btn-add');
// const btnSub = document.querySelector('.btn-sub');
// const btnMul = document.querySelector('.btn-mul');
// const btnDiv = document.querySelector('btn-div');
const btnEquals = document.querySelector('.btn-equals');
const outputNumber = document.querySelector('.number');

btnDigit.forEach((button => {
    button.addEventListener('click', displayDigits);
}));

function displayDigits(button) {
    let valButton = this.value;
    outputNumber.textContent = valButton;
    return valButton;
}

btnOperator.forEach((button => {
    button.addEventListener('click', function(e) {
        let selectOperator = this.value;
        outputNumber.textContent = selectOperator;
        return selectOperator;
    });
}));

btnEquals.addEventListener('click', function(e) {
    operate();
});

function add(num1, num2) {
    return num1 + num2;
    // return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    // return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    // return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    // return result;
}

function operate(operator, num1, num2) {
    // operator = btnOperator;
    switch(operator) {
        case "+":
            let result = add(num1, num2);
            outputNumber.textContent = result;
            break;
    }
}