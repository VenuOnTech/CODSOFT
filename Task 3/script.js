function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1); // Remove the last character
}

function calculateResult() {
    const display = document.getElementById('display').value;
    try {
        const result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === '.') {
        appendToDisplay(key);
    }
});


function calculatePower() {
    let base = prompt("Enter the base value (y):");
    let exponent = prompt("Enter the exponent value (x):");
    
    if (!isNaN(base) && !isNaN(exponent)) {
        let result = Math.pow(base, exponent);
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function squarePower() {
    let base1 = prompt("Enter the base value (x):");
    let exponent1 = 2;
    
    if (!isNaN(base1) && !isNaN(exponent1)) {
        let result1 = Math.pow(base1, exponent1);
        document.getElementById('display').value = result1;
    } else {
        document.getElementById('display').value = 'Error';
    }
}