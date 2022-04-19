const calculator = document.querySelector('.calculator');
const btnDigit = document.querySelectorAll('.btn-digit');
const btnOperator = document.querySelectorAll('.btn-operator');
const btnEquals = document.querySelector('.btn-equals');
const outputNumber = document.querySelector('.display-number');

function displayAndStoreKeys(button) {
    if (!button.target.closest('button')) return;
    const key = button.target;
    const keyValue = key.value;
    const displayValue = outputNumber.textContent;
    const type = key.dataset.type;
    // CHECKS IF IT'S A DIGIT BUTTON
    if (type === 'number') {
        if (displayValue === '0') {
            outputNumber.textContent = keyValue;
        } else if (calculator.dataset.previousKeyType === 'operator') {
            outputNumber.textContent = keyValue;
        } else {
            outputNumber.textContent = displayValue + keyValue;
        }
    }
    // CHECKS IF IT'S A OPERATOR BUTTON
    if (type === 'operator') {
        const operatorKeys = btnOperator;
        operatorKeys.forEach(el => {el.dataset.state = ''})
        key.dataset.state = 'selected';

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = keyValue;
    }

    // CHECKS IF IT'S EQUAL BUTTON
    if (type === 'equals') {
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        console.log(firstNumber, operator, secondNumber);

        outputNumber.textContent = operate(firstNumber, operator, secondNumber);
    } 
    calculator.dataset.previousKeyType = type;
}

btnDigit.forEach((button => {
    button.addEventListener('click', displayAndStoreKeys);
}));

btnOperator.forEach((button => {
    button.addEventListener('click', displayAndStoreKeys);
}));

btnEquals.addEventListener('click', displayAndStoreKeys);

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

function operate(num1, operator, num2) {
    let result = '';
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === 'plus') result = add(num1, num2);
    if (operator === 'minus') result = subtract(num1, num2);
    if (operator === 'times') result = multiply(num1, num2);
    if (operator === 'divide') result = divide(num1, num2);
    console.log(result);
    return result;
}