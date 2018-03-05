document.getElementById('generate').addEventListener('click', function () {
    let passLength = parseInt(document.getElementById('pass-length').value);
    generatePassword(passLength);
});

// copy to clipboard
document.getElementById('clipboard').addEventListener('click', function () {
    document.getElementById('password').select();
    document.execCommand('Copy');
});


function generatePassword(num) {

    let charCodes = {
        'uppercase': 'ABCDEFGHIJKLMNOPQRSTUWXYZ',
        'lowercase': 'abcdefghijklmnopqrstuvwxyz',
        'numbers': '0123456789',
        'special': '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    };
    
    let checked = document.querySelectorAll('input[type=checkbox]:checked');


    function readCharTypes() {
        let charTypes = [];

        for (var i of checked) {

            for (let key in charCodes) {
                if (i.value === key) {
                    charTypes.push(charCodes[key]);
                }
            }
        }
        return charTypes;
    }

    let charTypes = readCharTypes();


    function _generatePassword(length, charTypes) {
        let password = '';

        while (password.length < length) {
            password += getRandomCharOfType(charTypes);
        }

        function getRandomCharOfType(charTypes) {
            let randomChar = [];

            charTypes.forEach(function (element) {
                let rand = element[(Math.floor(Math.random() * element.length))];
                randomChar.push(rand);
            })
            return randomChar[Math.floor(Math.random() * randomChar.length)];
        }
        return password;
    }

    let password = _generatePassword(num, charTypes);


    function updateView(password) {
        if (!checked[0] && !checked[1] && !checked[2] && !checked[3]) {
            document.getElementById('warning').setAttribute('class', 'show');
        } else {
            document.getElementById('password').value = password;
            //clear the warning
            document.getElementById('warning').removeAttribute('class', 'show');
        }
    }
    updateView(password);

}