"use strict";
const mathematicButton = document.querySelectorAll(".mathematicdiv");
const inputBox = document.querySelector("#numberinput");
const backspaceButton = document.querySelector("#backspace");
const numberButtons = document.querySelectorAll(".numberdiv");
const clearButton = document.querySelector(".clear");
const equalTo = document.querySelector("#equalto");
const decimal = document.querySelector("#decimal");
const signChange = document.querySelector("#signchange");
let containerValues = {
    "first": "",
    "second": "",
    "sign": "",
};
function addToInput(value) {
    if (containerValues.sign == "") {
        containerValues.first += value;
        inputBox.value += value;
    }
    else if (containerValues.first != "" && containerValues.sign != "") {
        containerValues.second += value;
        inputBox.value += value;
    }
}
function clearInput() {
    inputBox.value = "";
}
function addSign(value) {
    if (containerValues.first != "" && containerValues.sign == "") {
        containerValues.sign = value;
        inputBox.value += value;
    }
    else if (containerValues.first != "" && containerValues.sign == value && containerValues.second == "") {
        calculate(containerValues.first, containerValues.first, value);
    }
    else if (containerValues.first != "" && containerValues.second != "" && containerValues.sign != value) {
        calculate(containerValues.first, containerValues.second, containerValues.sign);
        inputBox.value += value;
        containerValues.sign = value;
    }
}
function calculate(first, second, sign) {
    let firstNum = parseFloat(first)
    let secondNum = parseFloat(second)
    let resultValue = 0;

    switch (sign) {
        case "+":
            resultValue = (firstNum + secondNum);
            break;
        case "-":
            resultValue = (firstNum - secondNum);
            break;
        case "*":
            resultValue = (firstNum * secondNum);
            break;
        case "/":
            resultValue = (firstNum / secondNum);
            break;
        case "%":
            resultValue = inputBox.value = firstNum * (secondNum / 100);
            break;
        case "+/-":
            if (secondNum != "") {
                resultValue = 0;
            }
            else {
                resultValue = firstNum * -1;
            }
            break;
    }
    console.log(`${firstNum} ${secondNum} ${sign} ${resultValue}`)
    inputBox.value = "";
    inputBox.value = resultValue;
    containerValues.first = resultValue.toString();
    containerValues.second = "";
    containerValues.sign = "";
    return resultValue;

}
function backspace() {
    if (containerValues.first != "" && containerValues.sign == "" && containerValues.second == "") {
        let currentValue = inputBox.value;
        containerValues.first = currentValue.slice(0, -1)
        inputBox.value = currentValue.slice(0, -1);

    }
    else if (containerValues.second !== "") {
        let currentValue = containerValues.second;
        containerValues.second = currentValue.slice(0, -1)
        inputBox.value = `${containerValues.first}${containerValues.sign}${containerValues.second}`
    }
    else if (containerValues.sign != "" && containerValues.second == "") {
        containerValues.sign = ""
        inputBox.value = `${containerValues.first}${containerValues.sign}`
    }
}
function clear() {
    containerValues.first = "";
    containerValues.second = "";
    containerValues.sign = "";
    inputBox.value = "";
}
function equate() {
    if (containerValues.first != "", containerValues.second != "", containerValues.sign != "") {
        calculate(containerValues.first, containerValues.second, containerValues.sign);
    }
}
mathematicButton.forEach(button => {
    button.addEventListener("click", () => {
        addSign(button.innerText);
    })
})
backspaceButton.addEventListener("click", () => {
    backspace();
})
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        addToInput(button.innerText)
    })
})
clearButton.addEventListener("click", () => {
    clear();
})
equalTo.addEventListener("click", () => {
    equate();
})
signChange.addEventListener("click", () => {
    if (containerValues.second != "") {
        containerValues.second = containerValues.second * (-1).toString();
        inputBox.value = `${containerValues.first}${containerValues.sign}${containerValues.second}`
    }
    else {
        containerValues.first = parseFloat(containerValues.first) * (-1)
        inputBox.value = containerValues.first.toString();
    }
})
decimal.addEventListener("click", () => {
    // if (inputBox.value.toString().at(-1) == ".") {
    //     return;
    // }
    // else {
    //     inputBox.value += "."
    // }
    if (containerValues.second != "") {
        if (inputBox.value.at(-1) == ".") {
            return;
        }
        else {
            inputBox.value += "."
            containerValues.second += "."
        }
    }
    else if (containerValues.first != "" && containerValues.sign == "") {
        if (parseFloat(containerValues.first) % 1 == 0) {
            containerValues.first = containerValues.first.toString() + "."
            inputBox.value = `${containerValues.first}`;
        }
    }
})