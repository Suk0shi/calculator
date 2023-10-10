function add(a, b) {
    return +a + +b;
};

function subtract(a, b) {
    return +a - +b;
};

function multiply(a, b) {
    return +a * +b;
};

function divide(a, b) {
    return +a / +b;
};

let operationNum = '';
let operationOperator = '';
let operationNum2 = '';
let operationAnswer = '';

function operate(num1, operator, num2) {
    if(operator === add) {
        return add(num1, num2);
    }
    else if (operator === subtract) {
        return subtract(num1, num2);
    }
    else if (operator === multiply) {
        return multiply(num1, num2);
    }
    else if (operator === divide) {
        return divide(num1, num2);
    }
};

//populating the display

function numberInput(number) {
    if (operationOperator === '') {
        displayNum1.textContent += number;
        display.appendChild(displayNum1);
        operationNum += number;
        console.log(operationNum);
    }
    else if (operationAnswer === '') {
        displayNum2.textContent += number;
        display.appendChild(displayNum2);
        operationNum2 += number;
        console.log(operationNum2);
    }
}

const num0 = document.querySelector(".num0");
num0.addEventListener('click', () => {
    //add number to diplay
    numberInput('0');
});

const num1 = document.querySelector(".num1");
num1.addEventListener('click', () => {
    //add number to diplay
    numberInput('1');
});

const num2 = document.querySelector(".num2");
num2.addEventListener('click', () => {
    //add number to diplay
    numberInput('2');
});

const num3 = document.querySelector(".num3");
num3.addEventListener('click', () => {
    //add number to diplay
    numberInput('3');
});

const num4 = document.querySelector(".num4");
num4.addEventListener('click', () => {
    //add number to diplay
    numberInput('4');
});

const num5 = document.querySelector(".num5");
num5.addEventListener('click', () => {
    //add number to diplay
    numberInput('5');
});

const num6 = document.querySelector(".num6");
num6.addEventListener('click', () => {
    //add number to diplay
    numberInput('6');
});

const num7 = document.querySelector(".num7");
num7.addEventListener('click', () => {
    //add number to diplay
    numberInput('7');
});

const num8 = document.querySelector(".num8");
num8.addEventListener('click', () => {
    //add number to diplay
    numberInput('8');
});

const num9 = document.querySelector(".num9");
num9.addEventListener('click', () => {
    //add number to diplay
    numberInput('9');
});


const equals = document.querySelector(".equals");
equals.addEventListener('click', () => {
    //add number to diplay
    if (operationNum === '0' && operationOperator === divide && operationNum2 === '0') {
        answer.textContent = '= Do you want to watch the world burn?';
        display.appendChild(answer);
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
    }
    else {
        answer.textContent = '=' + operate(operationNum, operationOperator, operationNum2);
        display.appendChild(answer);
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    //add number to diplay
    displayNum1.textContent = '';
    display.appendChild(displayNum1);
    operationNum = '';
    console.log(operationNum);
    
    operator.textContent = '';
    display.appendChild(operator);
    operationOperator = '';

    displayNum2.textContent = '';
    display.appendChild(displayNum2);
    operationNum2 = '';

    answer.textContent = '';
    display.appendChild(displayNum2);
    operationAnswer = '';
});

function nextOperation(symbol,operatorInput) {
    displayNum1.textContent = operationAnswer;
        display.appendChild(displayNum1);
        operationNum = operationAnswer;
        console.log(operationNum);
        
        operator.textContent = symbol;
        display.appendChild(operator);
        operationOperator = operatorInput;

        displayNum2.textContent = '';
        display.appendChild(displayNum2);
        operationNum2 = '';

        answer.textContent = '';
        display.appendChild(displayNum2);
        operationAnswer = '';
}

const addition = document.querySelector(".add");
addition.addEventListener('click', () => {
    //add number to diplay
    if (operationNum2 === '') {
        operator.textContent = '+';
        display.appendChild(operator);
        operationOperator = add;  
    }
    else if (operationAnswer !== '') {
        nextOperation('+', add);
    }
    else if (operationNum2 !== '') {
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
        nextOperation('+', add);
    }
});

const minus = document.querySelector(".subtract");
minus.addEventListener('click', () => {
    //add number to diplay
    if (operationNum2 === '') {
        operator.textContent = '-';
        display.appendChild(operator);
        operationOperator = subtract;  
    }
    else if (operationAnswer !== '') {
        nextOperation('-', subtract);
    }
    else if (operationNum2 !== '') {
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
        nextOperation('-', subtract);
    }
});

const times = document.querySelector(".multiply");
times.addEventListener('click', () => {
    //add number to diplay
    if (operationNum2 === '') {
        operator.textContent = 'x';
        display.appendChild(operator);
        operationOperator = multiply;  
    }
    else if (operationAnswer !== '') {
        nextOperation('x', multiply);
    }
    else if (operationNum2 !== '') {
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
        nextOperation('x', multiply);
    }
});

const divides = document.querySelector(".divide");
divides.addEventListener('click', () => {
    //add number to diplay
    if (operationNum2 === '') {
        operator.textContent = '÷';
        display.appendChild(operator);
        operationOperator = divide;  
    }
    else if (operationAnswer !== '') {
        nextOperation('÷', divide);
    }
    else if (operationNum2 !== '') {
        operationAnswer = operate(operationNum, operationOperator, operationNum2);
        nextOperation('÷', divide);
    }
});

const display = document.querySelector(".display");
const displayNum1 = document.createElement('p');
displayNum1.classList.add('displayNum1');
displayNum1.textContent = '';
display.appendChild(displayNum1);

const operator = document.createElement('p');
operator.classList.add('operator');
operator.textContent = '';
display.appendChild(operator);

const displayNum2 = document.createElement('p');
displayNum2.classList.add('displayNum2');
displayNum2.textContent = '';
display.appendChild(displayNum2);

const answer = document.createElement('p');
answer.classList.add('answer');
answer.textContent = '';
display.appendChild(answer);