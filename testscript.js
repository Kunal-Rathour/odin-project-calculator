"use strict";
const inputContainer = document.querySelector("#numberinput")
const numberButtons = document.querySelectorAll(".numberdiv");
const backspace = document.querySelector("#backspace");
const clearButtons = document.querySelectorAll(".cleardiv");
let bufferText;
const bufferContainer = document.querySelector(".buffer");
const calculationObject = {
    firstNum: "",
    sign: "",
    secondNum: "",
}
bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
bufferContainer.innerText = bufferText;
let containerValue = parseInt(inputContainer.innerText);
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        let inputText = parseInt(button.textContent);
        inputContainer.innerText += "" + button.textContent;
        console.log(button.textContent)
    })
})
backspace.addEventListener("click", () => {
    let containerValue = inputContainer.innerText;
    let newString = containerValue.slice(0, -1);
    inputContainer.innerText = `${newString}`;
})
const mathematicButton = document.querySelectorAll(".mathematicdiv")
mathematicButton.forEach(button => {
    button.addEventListener("click", () => {
        calculationObject["firstNum"] = parseInt(inputContainer.innerText);
        calculationObject["sign"] = button.id;
        inputContainer.innerText = "";
        bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
        bufferContainer.innerText = bufferText;
    })
})
const equalTo = document.querySelector("#equalto");
equalTo.addEventListener("click", () => {
    calculationObject["secondNum"] = parseInt(inputContainer.innerText);
    bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
    bufferContainer.innerText = bufferText;
    bufferContainer.innerText = bufferText;
    arithematic(calculationObject["firstNum"], calculationObject["sign"], calculationObject["secondNum"])
})
clearButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == "clearCurrent") {
            inputContainer.innerText = "";
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
        }
        else {
            calculationObject["firstNum"] = "";
            calculationObject["sign"] = "";
            calculationObject["secondNum"] = "";
            inputContainer.innerText = "";
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
        }
    })
})
clearButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText)

    })
})
function arithematic(firstInput, sign, secondInput) {
    switch (sign) {
        case "divide":
            inputContainer.innerText = firstInput / secondInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "plus":
            inputContainer.innerText = firstInput + secondInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "minus":
            inputContainer.innerText = firstInput - secondInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "multiply":
            inputContainer.innerText = firstInput * secondInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "percentage":
            inputContainer.innerText = firstInput * (secondInput / 100)
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "ratio":
            inputContainer.innerText = 1 / firstInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "square":
            inputContainer.innerText = firstInput * firstInput;
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "root":
            inputContainer.innerText = Math.sqrt(firstInput);
            bufferText = `${calculationObject['firstNum']} ${calculationObject['sign']} ${calculationObject["secondNum"]}`
            bufferContainer.innerText = bufferText;
            break;
        case "signchange":
            inputContainer.innerText = firstInput * -1;
            break;

    }
}
