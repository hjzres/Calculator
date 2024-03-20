let shownNum = 0;
let total = 0;
let operationToUse;

let isNegative = false;
let isDecimal = false;
let decimalPart = 0.1;

const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById('one');
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

const totalNumber = document.getElementById("total");

const clearButton = document.getElementById("clear");
const negativeButton = document.getElementById("negative");
const percentButton = document.getElementById("percent");

const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const decimalButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');

numberButtons.forEach(button => {
    if(button != decimalButton){
        button.addEventListener('click', () => {
            if(!isDecimal){
                changeNumber(parseFloat(button.textContent));
            } else {
                changeDecimal(parseFloat(button.textContent));
            }
        });
    }
});

operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        shownNum = 0;
        if(operationToUse != null){
            operationToUse();
            operationToUse = null;
        } else{
            total += parseFloat(totalNumber.textContent);
        }
        isNegative = false;
        isDecimal = false;
        decimalPart = 0.1;
        totalNumber.innerHTML = total;
        console.log(total);
    });
});

decimalButton.addEventListener('click', () => {
    if(!isDecimal)
    totalNumber.innerHTML += '.';
    isDecimal = true;
});

addButton.addEventListener('click', ()=>{
    operationToUse = addNum;
});

subtractButton.addEventListener('click', ()=>{
    operationToUse = subtractNum;
});

multiplyButton.addEventListener('click', ()=>{
    operationToUse = multiplyNum;
});

divideButton.addEventListener('click', ()=>{
    operationToUse = divideNum;
});

equalButton.addEventListener('click', () => {
    operationToUse = null;
});

clearButton.addEventListener('click', () => {
    resetNumber();
});

percentButton.addEventListener('click', () => {
    shownNum /= 100;
    totalNumber.innerHTML = shownNum;
})

negativeButton.addEventListener('click', () => {
    shownNum *= -1;
    totalNumber.innerHTML = shownNum;
    isNegative = !isNegative;
})

let addNum = () => {
    total += parseFloat(totalNumber.textContent);
    console.log("added");
}

let subtractNum = () => {
    total -= parseFloat(totalNumber.textContent);
    console.log("subtract");
}

let multiplyNum = () => {
    total *= parseInt(totalNumber.textContent);
    console.log("multiplied");
}

let divideNum = () => {
    total /= parseFloat(totalNumber.textContent);
    console.log("divided");
}

let changeNumber = (x) =>{
    shownNum *= 10;
    if(!isNegative)
        shownNum += x;
    else
        shownNum -= x;
    totalNumber.innerHTML = shownNum;
}

let changeDecimal = (x) => {
    if(!isNegative){
        shownNum += (x * decimalPart);
    } else {
        shownNum -= (x * decimalPart);
    }
    decimalPart *= 0.1;
    totalNumber.innerHTML = shownNum;
}

let resetNumber = () => {
    shownNum = 0;
    totalNumber.innerHTML = 0;
    total = 0;
    decimalPart = 0.1;
    isNegative = false;
    isDecimal = false;
}