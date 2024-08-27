let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('num')) {
            currentNumber += button.value;
            display.value = currentNumber;
        } else if (button.classList.contains('op')) {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = button.value;
            display.value = previousNumber + operation;
        } else if (button.classList.contains('eq')) {
            let result = eval(previousNumber + operation + currentNumber);
            display.value = result;
            currentNumber = result;
            previousNumber = '';
            operation = '';
        } else if (button.classList.contains('clear')) {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        }
    });
});