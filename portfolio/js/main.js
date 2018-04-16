/*
event listeners 
*/

document.addEventListener('DOMContentLoaded', function () {
    switchTheme().onTime();
    type(myFavouriteStrings, typewriterOutput);
});

document.getElementById('main-nav').addEventListener('click', smoothScroll);

document.getElementById('mobile-nav').addEventListener('click', smoothScroll);

document.getElementById('mobile-nav').addEventListener('click', toggleNavigation);

document.getElementById('form-submit-btn').addEventListener('click', function () {

    let url = "https://formspree.io/mr." + "sulowski" + "@" + "gmail" + "." + "com";
    this.parentElement.setAttribute('action', url);
});


/*
variables
*/

const myFavouriteStrings = [
		  "solving programming problems",
		  "playing the saxophone",
          "coding",
		  "music",
		  "David Lynch movies",
          "food"
		];

const typewriterOutput = document.getElementById('typewriter-output');

/*
functions
*/

const switchTheme = () => {

    const toggle = () => {
        const stylesheetLink = document.getElementById('night-theme-style');

        if (stylesheetLink.href == location.href) {
            stylesheetLink.href = 'css/style--night-theme.css';
        } else {
            stylesheetLink.href = '';
        }
    }

    const onTime = () => {
        const date = new Date();

        if (date.getHours() >= 20 || date.getHours() <= 6) {
            toggle();
            document.getElementById('theme-switch').checked = true;
        }
    }

    return {
        toggle,
        onTime
    };
}

function smoothScroll(e) {

    e.preventDefault();

    if (e.target.tagName === 'A') {
        const linkTarget = e.target.getAttribute('href').slice(1),
            targetOffset = document.getElementById(linkTarget).offsetTop,
            navDimensions = this.getBoundingClientRect();

        window.scroll({
            top: targetOffset - navDimensions.height,
            left: 0,
            behavior: 'smooth'
        });
    }
}

function toggleNavigation(e) {

    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--collapsed');
    document.body.classList.toggle('disable-scroll');
}


window.onscroll = function () {

    const mainNav = document.getElementById('main-nav');

    if (this.scrollY > 189) {
        mainNav.classList.add('main-nav--fixed');
    } else {
        mainNav.classList.remove('main-nav--fixed');
    }
}




function type(strings, outputElement) {

    const typeSpeed = 80,
        deleteSpeed = 30,
        waitBetween = 500;

    let sentenceIndex = 0,
        currentChar = 0,
        deleteInterval = null;
    
    function typeString() {
        
        if (sentenceIndex >= strings.length) {
            sentenceIndex = 0;
        }

        const chars = strings[sentenceIndex].split('');

        setTimeout(function () {
            if (currentChar >= chars.length) {
                setTimeout(function () {
                    sentenceIndex++;

                    deleteInterval = setInterval(function () {
                        outputElement.innerHTML = outputElement.innerHTML.substr(0, currentChar - 1);

                        currentChar--;

                        if (currentChar == 0) {
                            clearInterval(deleteInterval);
                            typeString();
                        }
                    }, deleteSpeed);
                }, waitBetween);

                return;
            }

            outputElement.innerHTML += chars[currentChar];
            currentChar++;

            typeString();
        }, typeSpeed);
    }

    typeString();
}


//const projectInfoBtns = document.querySelectorAll('.project-info-btn');
//
//for ( let i = 0; i < projectInfoBtns.length; i++ ) {
//    
//    projectInfoBtns[i].addEventListener('click', function (e) {
//        this.nextElementSibling.classList.toggle('visible');
//    })
//}