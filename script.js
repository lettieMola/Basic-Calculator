
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


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

function deleteDisplay() {
    let display = document.getElementById('display');
    let startPos = display.selectionStart;  // Start of selection
    let endPos = display.selectionEnd;      // End of selection
    let currentValue = display.value;

    // If there's a selection, delete the selected number
    if (startPos !== endPos) {
        display.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
        display.setSelectionRange(startPos, startPos);  // Set cursor to where deletion happened
    } 
    // If no selection, delete the last character before the cursor
    else {
        if (startPos > 0) {
            display.value = currentValue.slice(0, startPos - 1) + currentValue.slice(endPos);
            display.setSelectionRange(startPos - 1, startPos - 1);  // Set cursor to new position
        }
    }
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
                    deleteDisplay();
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


        