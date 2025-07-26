// Step One: Arithmatic Functions: Addition, Subtraction, Multiplication, Division

function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot Divide by 0"
    }
    return a / b; 
}

// History Array 

const calculateHistory = [];

// Function to Preform Calculation 

function performCalculation(a, b, operation) {

    // Check if Input is a Number 
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return "Error: Both inputs must be valid numbers";
    }

    let result; 

    if (operation === "add") {
        result = add(a, b);
    } else if (operation === "subtract") {
        result = subtract(a, b);
    } else if (operation === "multiply") {
        result = multiply(a, b);
    } else if (operation === "divide") {
        result = divide(a, b);
    } else {
        result = "Error: Invalid Operation"
    }

// Making calculation Object 

const calculation = {
    operand1: a, 
    operand2: b, 
    operation: operation, 
    result: result
}; 

// History Array 

calculateHistory.push(calculation); 

// Return Result 

return result; 

}

// Listen for Button Click 

document.getElementById("calculateButton").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    const result = performCalculation(a, b, operation);
    document.getElementById("result").textContent = "Result: " + result; 
    showHistory();
}
);

// Funtion to Show History 

function showHistory() {
    var historyArea = document.getElementById("historyList");

    if (calculateHistory.length === 0) {
        historyArea.textContent = "No calculations yet.";
        return; 
    }

    // Empty String 
    var allText = ""; 

    // Make Operation More User Friendly and Readable 

    for (let i = 0; i < calculateHistory.length; i++) {
        const c = calculateHistory[i];
        allText += c.operand1 + " " + getOperationSymbol(c.operation) + " " + c.operand2 + " = " + c.result;

        // Add a Semicolon and Space Between Results 

        if (i !== calculateHistory.length -1 ) {
            allText += " ; "; 
        }
    }

    // Show History on Page

    historyArea.textContent = allText;

}

// Turn Calculation Word to Symbol 

function getOperationSymbol(op) {
    if (op === "add") return "+";
    if (op === "subtract") return "-";
    if (op === "multiply") return "*";
    if (op === "divide") return "/"; 
}
