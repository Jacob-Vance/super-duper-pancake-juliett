// Define NATO alphabet mapping
const natoAlphabet = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 
    'Z': 'Zulu', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five',
    '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '0': 'Zero'
};

// Function to convert text to NATO alphabet with formatted output
function convertToNATO() {
    const inputText = document.getElementById('input-text').value.toUpperCase(); // Get input text and convert to uppercase
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];

        if (/[A-Z,1,2,3,4,5,6,7,8,9,0]/.test(char)) {
            // Append the formatted output for the character
            outputText += `${char} = ${natoAlphabet[char] || 'Unknown'}\n`;
        } else {
            // If not a letter or number, just append the character on a new line
            outputText += `${char}\n`;
        }
    }

    document.getElementById('output-text').value = outputText.trim(); // Trim to remove trailing newline
}

// Function to clear the text from the output field
function clearOutput() {
    document.getElementById('output-text').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('conversion-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        convertToNATO();
    });

    const inputField = document.getElementById('input-text');
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            convertToNATO();
        }
    });
});
