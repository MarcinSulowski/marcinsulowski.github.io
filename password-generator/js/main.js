const PassGen = (function () {
	const charCodes = {
		'uppercase': 'ABCDEFGHIJKLMNOPQRSTUWXYZ',
		'lowercase': 'abcdefghijklmnopqrstuvwxyz',
		'numbers'  : '0123456789',
		'special'  : '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
	};
	const warningDisplay = document.getElementById('warning'),
          passwordDisplay = document.getElementById('password');

	const generatePasswordString = ( length, selectedCharTypes ) => {
		let password = '';
        
		const getRandomCharByType = ( type ) => {
			const charsOfType = charCodes[ type ];
			return charsOfType[ Math.floor(Math.random() * charsOfType.length) ];
		};

		for ( let i = 0; i < length; i++ ) {
			const randomType = selectedCharTypes[ Math.floor(Math.random() * selectedCharTypes.length) ];
			password += getRandomCharByType(randomType);
		}
		return password;
	};

    // function handles all logic related with generating passwords and displaying warnings
	const generatePassword = () => {
		const passwordLength = parseInt(document.getElementById('pass-length').value),
              selectedCheckboxElements = document.querySelectorAll('input[type=checkbox]:checked'),
              selectedCharTypes = [ ...selectedCheckboxElements ].map(( checkbox ) => checkbox.value);

		// show warnings and update view
		warningDisplay.classList.remove('show');
		if ( !selectedCharTypes.length ) {
			warningDisplay.classList.add('show');
		}
		else {
			passwordDisplay.value = generatePasswordString(passwordLength, selectedCharTypes);
		}
	};

	// copy password to clipboard
	const copyToClipboard = () => {
		passwordDisplay.select();
		document.execCommand('Copy');
	};

	return { generatePassword, copyToClipboard }
}());