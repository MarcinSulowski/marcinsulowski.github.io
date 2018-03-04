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
    let checked = document.querySelectorAll('input[type=checkbox]:checked');
    let charTypes = [];

    for (var i of checked) {

        for (let key in charCodes) {
            if (i.value === key) {
                charTypes.push(charCodes[key]);
            }
        }
    }

    //looping throught functions to fill 'password' string with random characters
    while (password.length < num) {
        password += getRandomCharOfType(charTypes);
    }

    function getRandomCharOfType(charTypes) {
        let randomChars = [];
        
        charTypes.forEach(function (charRange) {
            let min = charRange[0];
            let max = charRange[1];
            let randomChar = String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
            randomChars.push(randomChar);
        })
        
        return randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    //if none of the checkboxes is checked, display a warning message
    if (!checked[0] && !checked[1] && !checked[2] && !checked[3]) {
        document.getElementById('warning').setAttribute('class', 'show');
    } else {
        document.getElementById('password').value = password;
        //clear the warning
        document.getElementById('warning').removeAttribute('class', 'show');
    }
}