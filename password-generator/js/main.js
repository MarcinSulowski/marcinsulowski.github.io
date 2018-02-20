//ASCII codes
//65-90 uppercase letters
//97-122 lowercase letters
//48-57 numbers
//33-47 specialChars
//91-96 specialChars
//123-126 specialChars


// click event for 'generate-password' button to prevent submitting the form and to call generatePassword function
document.getElementById('generate-password').addEventListener('click', function (e) {
    e.preventDefault();
    var passLength = parseInt(document.getElementById('pass-length').value);
    generatePassword(passLength);
});

// click event for 'clipboard' to copy to clipboard
document.getElementById('clipboard').addEventListener('click', function () {
    document.getElementById('password').select();
    document.execCommand('Copy');
});

function generatePassword(num) {

    var password = '';
    var inputs = document.getElementsByTagName('input');
    var checked = [];

    //checking if checkboxes are checked
    //yes - split and slice their value and push into array 'checked' (function drawChars takes two parameters)
    //no - push '00' into 'checked' array for error handling
    //we get an array with parameters for later

    for (var i of inputs) {
        if (i.type === 'checkbox' && i.checked) {
            checked.push(i.value.split(',').slice(0));
        } else if (i.type === 'checkbox' && !i.checked) {
            checked.push(('00'));
        }
    }
    
    //looping throught functions to fill 'password' string with random characters
    while (password.length < num) {
        password += drawChars(
            randomChar(checked[0][0], checked[0][1]),
            randomChar(checked[1][0], checked[1][1]),
            randomChar(checked[2][0], checked[2][1]),
            randomChar(checked[3][0], checked[3][1])

        );
    }
    
    //takes in 2 parameters from 'checked' array
    //if both parameters === 0 returns 0 for error handling
    //else returns a random char from the specified ASCII range
    function randomChar(min, max) {
        min = parseInt(min);
        max = parseInt(max);

        if (!max && !min) {
            return 0;
        } else {
            return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
    
    //takes in 4 parameters - 4 random characters from randomChar function
    //creates an empty array for storing filtered parameters
    //returns a random character from an array of filtered parameters
    //this eliminates the possibility of not returning a character
    function drawChars(a, b, c, d) {
        var argFilter = [];
        for (let i of arguments) {
            if (i !== 0) {
                argFilter.push(i);
            }
        }
        return argFilter[Math.floor(Math.random() * argFilter.length)];
    }

    //if none of the checkboxes is checked, display a warning message
    if (checked[0] === '00' && checked[1] === '00' && checked[2] === '00' && checked[3] === '00') {
        document.getElementById('warning').innerHTML = 'Choose at least one option!';
    } else {
        document.getElementById('password').value = password;
        //clear the warning
        document.getElementById('warning').innerHTML = '';
    }
}

