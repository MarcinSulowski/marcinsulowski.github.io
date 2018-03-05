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
    'uppercase': 'ABCDEFGHIJKLMNOPQRSTUWXYZ',
    'lowercase': 'abcdefghijklmnopqrstuvwxyz',
    'numbers': '0123456789',
    'special': '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

function generatePassword(num) {

    const checked = document.querySelectorAll('input[type=checkbox]:checked');
    const warning = document.getElementById('warning');

    function readCharTypes() {
        const chosenCharTypes = [];

        for (let i of checked) {

            for (let key in charCodes) {
                if (i.value === key) {
                    chosenCharTypes.push(charCodes[key]);
                }
            }
        }
        return chosenCharTypes;
    }

    const charTypes = readCharTypes();
    const password = _generatePassword(num, charTypes);


    function updateView(password) {
        if (!checked[0] && !checked[1] && !checked[2] && !checked[3]) {
            warning.setAttribute('class', 'show');
        } else {
            document.getElementById('password').value = password;
            warning.removeAttribute('class', 'show');
        }
    }
    updateView(password);
}

function _generatePassword(length, charTypes) {
    let password = '';

    while (password.length < length) {
        password += getRandomCharOfType(charTypes);
    }

    function getRandomCharOfType(charTypes) {
        const randomChar = [];

        charTypes.forEach(function (element) {
            let rand = element[(Math.floor(Math.random() * element.length))];
            randomChar.push(rand);
        })
        return randomChar[Math.floor(Math.random() * randomChar.length)];
    }
    return password;
}