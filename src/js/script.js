// Variables to store the numbers and operator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

// Get the display element
const display = document.querySelector(".display");

// Function to handle number button clicks
function handleNumberClick(value) {
    if (operator === "") {
        firstNumber += value;
        display.textContent = firstNumber;
    } else {
        secondNumber += value;
        display.textContent = firstNumber + operator + secondNumber;
    }
}

// Function to handle operator button clicks
function handleOperatorClick(value) {
    if (firstNumber !== "") {
        operator = value;
        display.textContent = firstNumber + operator;
    }
}

// Function to calculate the result
function calculateResult() {
    if (firstNumber !== "" && secondNumber !== "") {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error"; // Avoid division by zero
                break;
        }

         display.textContent = firstNumber + operator + secondNumber + "=" + result;

         // Reset for new calculations
         firstNumber = result.toString();
         secondNumber = "";
         operator = "";
    }
}

// Function to clear everything
function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = 0;
    display.textContent = "0";
}

// Add event listeners to buttons
document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (!isNaN(value)) {
            handleNumberClick(value);
        } else if (["+", "-", "*", "/"].includes(value)) {
            handleOperatorClick(value);
        } else if (value === "=") {
            calculateResult();
        } else if (value === "C") {
            clearCalculator();
        }
    });
});


