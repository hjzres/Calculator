let shownNum = 0;
let total = 0;
let operationToUse;

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
    button.addEventListener('click', () => {
        changeNumber(parseInt(button.textContent));
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        shownNum = 0;
        if(operationToUse != null){
            operationToUse();
            totalNumber.innerHTML = total;
            operationToUse = null;
        }
    });
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

let addNum = ()=>{
    total += parseInt(totalNumber.textContent);
}

let subtractNum = ()=>{
    total -= parseInt(totalNumber.textContent);
}

let multiplyNum = ()=>{
    total *= parseInt(totalNumber.textContent);
}

let divideNum = ()=>{
    total /= parseInt(totalNumber.textContent);
}

let changeNumber = (x) =>{
    shownNum *= 10;
    shownNum += x;
    totalNumber.innerHTML = shownNum;
}

let resetNumber = () => {
    shownNum = 0;
    totalNumber.innerHTML = 0;
}