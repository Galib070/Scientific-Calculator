function appendToDisplay(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLast() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        alert('Invalid operation');
    }
}

// Focus the display to capture keyboard events
window.onload = function() {
    document.getElementById('display').focus();
};

// Capture keypress events
document.addEventListener('keydown', function(event) {
    const display = document.calc.display;
    const key = event.key;

    if (key >= '0' && key <= '9' || key === '.' || key === '/' || key === '*' || key === '-' || key === '+' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
