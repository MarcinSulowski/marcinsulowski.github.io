//ASCII codes
//65-90 uppercase letters
//97-122 lowercase letters
//48-57 numbers
//33-47 specialChars
//91-96 specialChars
//123-126 specialChars


document.getElementById('generate').addEventListener('click', function () {
    let passLength = parseInt(document.getElementById('pass-length').value);
    generatePassword(passLength);
});

// copy to clipboard
document.getElementById('clipboard').addEventListener('click', function () {
    document.getElementById('password').select();
    document.execCommand('Copy');
});

const charCodes = {
    'uppercase': [65, 90],
    'lowercase': [97, 122],
    'numbers': [48, 57],
    'special': [33, 47]
};

function generatePassword(num) {

    let password = '';
    let inputs = document.getElementsByTagName('input');
    let charTypes = [];

    //checking if checkboxes are checked and have the same value as the corresponding key in charCodes
    //no - returns 0 for error handling
    for (let key in charCodes) {
        
        for (var i of inputs) {
            if (i.type === 'checkbox' && i.checked && i.value === key) {
                charTypes.push(charCodes[key]);
            } else if (i.type === 'checkbox' && !i.checked && i.value === key) {
                charTypes.push(0);
            }
        }
    }
    
    //looping throught functions to fill 'password' string with random characters
    while (password.length < num) {
        password += drawChars(
            getRandomCharOfType(charTypes[0]),
            getRandomCharOfType(charTypes[1]),
            getRandomCharOfType(charTypes[2]),
            getRandomCharOfType(charTypes[3])
        );
    }

    //if charType === 0 returns 0 for error handling
    //else returns a random char from the specified ASCII range
    function getRandomCharOfType(charType) {
        let min = charType[0];
        let max = charType[1];

        if (charType === 0) {
            return 0;
        } else {
            return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }

    //draws 1 character from 4 random characters from getRandomCharOfType function
    //this eliminates the possibility of not returning a character
    function drawChars(a, b, c, d) {
        let charFilter = [];
        for (let i of arguments) {
            if (i !== 0) {
                charFilter.push(i);
            }
        }
        return charFilter[Math.floor(Math.random() * charFilter.length)];
    }

    //if none of the checkboxes is checked, display a warning message
    if (charTypes[0] === 0 && charTypes[1] === 0 && charTypes[2] === 0 && charTypes[3] === 0) {
        document.getElementById('warning').setAttribute('class', 'show');
    } else {
        document.getElementById('password').value = password;
        //clear the warning
        document.getElementById('warning').removeAttribute('class', 'show');
    }
}