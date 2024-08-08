"use strict";
const inputContainer = document.querySelector("#numberinput")
const numberButtons = document.querySelectorAll(".numberdiv");
const backspace = document.querySelector("#backspace");
const clearButtons = document.querySelectorAll(".cleardiv");
let bufferValue;
let containerValue = inputContainer.innerText;
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
    let id = button.id;
    let firstInput = inputContainer.innerText;
    button.addEventListener("click", () => arithematic(firstInput, firstInput, id))
})
clearButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText)
    })
})
function arithematic(firstnumber, secondNumber, sign) {
    console.log(firstnumber)
    console.log(secondNumber)
    switch (sign) {
        case "divide":
            console.log("Divide");
            break;
        case "plus":
            console.log("Add");
            break;
        case "minus":
            console.log("Subtract");
            break;
        case "multiply":
            console.log("multiply");
            break;
        case "percentage":
            console.log("Percentage");
            break;
        case "ratio":
            console.log("Ratio");
            break;
        case "square":
            console.log("Square");
            break;
        case "root":
            console.log("Root")
            break;
        case "signchange":
            console.log("SignChange");
            break;
        case "decimal":
            console.log("Decimal");
            break;
    }
}