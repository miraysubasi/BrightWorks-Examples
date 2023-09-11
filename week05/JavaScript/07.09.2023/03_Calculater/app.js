const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let operator = null;
let firstValue = null;
let waitingSecondvalue = false;

function updateDisplay() {
    display.value = displayValue;
}
keys.addEventListener("click", function (e) {
    const element = e.target;
    const value = element.value;
    switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(value);
            break;
        case ".":
            inputDecimal();
            break;
        case "clear":
            clearDisplay();
            break;
        case undefined:
            return;
        default:
            inputNumber(value);
            break;
    }
    updateDisplay()
})

function handleOperator(nextOperator) {
    let value = parseFloat(displayValue);
    if (operator && waitingSecondvalue) {
        operator = nextOperator;
        return;
    }

    if (firstValue == null) {
        firstValue = value;
    } else {
        const result = calculate(firstValue, operator, value);
        displayValue = result.toPrecision(10).toString();
        firstValue = result;
    }
    waitingSecondvalue = true;
    operator = nextOperator;
}
function calculate(firstNumber, op, secondNumber) {
    switch (op) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            return secondNumber;
    }
}

function inputDecimal() {
    if (!displayValue.includes(".")) {
        displayValue = displayValue + ".";
    }
}
function clearDisplay() {
    displayValue = "0";
}
function inputNumber(num) {
    if (waitingSecondvalue) {
        displayValue = num;
        waitingSecondvalue = false;
    } else {
        displayValue = displayValue == "0" ? num : displayValue + num;
    }

}






updateDisplay();
//  ödev:
// 1)klavyeden de calışsın(bu biraz zaman alabilir)
// 2)Ondalık basamak her zaman görünmesn