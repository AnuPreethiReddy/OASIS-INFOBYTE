function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append value to display
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/[^0-9+\-*/().]/g, '')); // Calculate the expression
    } catch (error) {
        display.value = 'Error'; // Handle invalid expression
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Delete last character
}

