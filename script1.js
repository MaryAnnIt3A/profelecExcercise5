let num = 2;
let name = "Deborah";
let bool = true;

let firstNumber = parseFloat(prompt("Enter first number"));
let secondNumber = parseFloat(prompt("Enter second number"));

let operation = prompt("Enter operation");
console.log("The operator is " + operation);

let total;

if (operation === "+") {
    total = firstNumber + secondNumber;
    console.log("The total is " + total);
} else if (operation === "-") {
    total = firstNumber - secondNumber;
    console.log("The total is " + total);
} else if (operation === "*") {
    total = firstNumber * secondNumber;
    console.log("The total is " + total);
} else if (operation === "/") {
    total = firstNumber / secondNumber;
    console.log("The total is " + total);
} else {
    console.log("Invalid Operator");
}
