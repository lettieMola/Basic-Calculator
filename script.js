
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// function deleteLastCharacter() {
//     let display = document.getElementById('display');
//     display.value = display.value.slice(0, -1);
// }

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    let display = document.getElementById('display');
    let value = display.value;
    if (value.includes('*') || value.includes('/') || value.includes('+') || value.includes('-')) {
        let parts = value.split(/(\D)/);
        let number = parseFloat(parts[0]);
        let percentage = parseFloat(parts[2]);
        display.value = (number * (percentage / 100)).toString();
    } else {
        display.value = (parseFloat(value) / 100).toString();
    }
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    let startPos = display.selectionStart;
    let endPos = display.selectionEnd;
    let currentValue = display.value;

    if (startPos === endPos) {
        startPos = Math.max(startPos - 1, 0);
    }

    display.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
    display.setSelectionRange(startPos, startPos);
}
        // Add keyboard input support
        document.addEventListener('keydown', function(event) {
            let key = event.key;
            switch (key) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '+':
                case '-':
                case '*':
                case '/':
                case '.':
                    appendToDisplay(key);
                    break;
                case 'Enter':
                    calculateResult();
                    break;
                case 'Backspace':
                    deleteLastCharacter();
                    break;
                case 'Escape':
                    clearDisplay();
                    break;
                case '%':
                    calculatePercentage();
                    break;
                default:
                    break;
            }
        });


        