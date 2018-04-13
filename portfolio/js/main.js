document.addEventListener('DOMContentLoaded', function () {
    runTyping();
    switchTheme().onTime();
});


const switchTheme = () => {

    const toggle = () => {
        const stylesheetLink = document.getElementById('night-theme-style');

        if ( stylesheetLink.href == location.href ) {
            stylesheetLink.href = 'css/night-theme-style.css';
        } else {
            stylesheetLink.href = '';
        }
    }

    const onTime = () => {
        const date = new Date();

        if ( date.getHours() >= 20 || date.getHours() <= 6 ) {
            toggle();
            document.getElementById('theme-switch').checked = true;
        }
    }
    
    return { toggle, onTime };
    
};

document.getElementById('main-nav').addEventListener('click', function (e) {
    
    e.preventDefault();
    
    if ( e.target.tagName === 'A' ) {
        const linkTarget = e.target.getAttribute('href').slice(1);
        const targetOffset = document.getElementById(linkTarget).offsetTop;
        const navDimensions = this.getBoundingClientRect();
        
        window.scroll({ top: targetOffset - navDimensions.height, left: 0, behavior: 'smooth' });
    }
        
});


window.onscroll = function () {
    
    const mainNav = document.getElementById('main-nav');
    
    if ( this.scrollY > 189 ) {
        mainNav.classList.add('fixed');
    } else {
        mainNav.classList.remove('fixed');
    }
};


function runTyping() {
    const outputElement = document.getElementById('output');
    // milliseconds
    const typeSpeed = 80;
    const deleteSpeed = 30;
    const deleteAfter = 1000;
    const items = [
		  "solving programming problems",
		  "playing the saxophone",
          "coding",
		  "music",
		  "David Lynch movies",
          "food"
		];

    let sentence = 0;
    let currentChar = 0;
    let deleteInterval = null;

    function type() {
        if ( sentence >= items.length ) {
            sentence = 0;
        }

        const chars = items[ sentence ].split("");

        setTimeout(function () {
            if ( currentChar >= chars.length ) {
                setTimeout(function () {
                    sentence++;

                    deleteInterval = setInterval(function () {
                        outputElement.innerHTML = outputElement.innerHTML.substr(0, currentChar - 1);

                        currentChar--;

                        if ( currentChar == 0 ) {
                            clearInterval( deleteInterval );
                            type();
                        }
                    }, deleteSpeed);
                }, deleteAfter);

                return;
            }

            outputElement.innerHTML += chars[ currentChar ];
            currentChar++;

            type();
        }, typeSpeed);
    }

    type();
}