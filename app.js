//TODO SMIT JS SIMPLE CALCULATOR TASK

var inputOne = parseFloat(prompt("Enter First Number : "))
var inputTwo = parseFloat(prompt("Enter Second Number : "))
var operationSymbol = prompt("Enter the Operation that you want to perform : ")

//! To handle the string or not a number values
if(isNaN(inputOne && inputTwo)){
    alert("Enter the Number not a String !")
}

//! TO handle the invalid operations

switch(operationSymbol){
    case "+":
        alert(`The addition of the given values is ${inputOne + inputTwo}`)
    break;
    case "-":
        alert(`The Subtraction of the given values is ${inputOne - inputTwo}`)
    break;
    case "/":
        alert(`The Division of the given values is ${inputOne / inputTwo}`)
    break;
    case "%":
        alert(`The Remainder of the given values is ${inputOne % inputTwo}`)
    break;
    default:
        alert("Enter the valid Operation Symbol !")
    break;
}
