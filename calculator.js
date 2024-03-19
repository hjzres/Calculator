let shownNum = 0;
let total = 0;

const totalNumber = document.getElementById("total");
const clearButton = document.getElementById("clear");
const negativeButton = document.getElementById("negative");
const percentButton = document.getElementById("percent");
const divideButton = document.getElementById("divide");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const multiplyButton = document.getElementById("multiply");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const subtractButton = document.getElementById("subtract");
const oneButton = document.getElementById('one');
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const addButton = document.getElementById("add");
const zeroButton = document.getElementById("zero");
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
        totalNumber.innerHTML = total;
        shownNum = 0;
    });
});

let changeNumber = (x) =>{
    shownNum *= 10;
    shownNum += x;
    totalNumber.innerHTML = shownNum;
}

let resetNumber = () => {
    shownNum = 0;
    totalNumber.innerHTML = 0;
}