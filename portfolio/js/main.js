/*
event listeners 
*/

document.addEventListener('DOMContentLoaded', function () {
    switchTheme().onTime();
    type(myFavouriteStrings, typewriterOutput);
});

document.getElementById('main-nav').addEventListener('click', smoothScroll);
document.getElementById('mobile-nav').addEventListener('click', smoothScroll);

document.getElementById('form-submit-btn').addEventListener('click', function () {

    let url = "https://formspree.io/mr." + "sulowski" + "@" + "gmail" + "." + "com";
    this.parentElement.setAttribute('action', url);
});


/*
functions
*/


// switch theme function
const switchTheme = () => {

    const toggle = () => {
        const stylesheetLink = document.getElementById('night-theme-styles');
        let href = stylesheetLink.getAttribute('href');

        if (href === null) {
            stylesheetLink.setAttribute('href', 'css/styles--night-theme.css');
        } else {
            stylesheetLink.removeAttribute('href');
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

//smooth scroll function
function smoothScroll(e) {

    e.preventDefault();

    if (e.target.classList.contains('main-nav__link')) {

        const linkTarget = e.target.getAttribute('href').slice(1);
        const targetOffset = document.getElementById(linkTarget).offsetTop;
        const navDimensions = this.getBoundingClientRect();

        window.scroll({
            top: targetOffset - navDimensions.height,
            left: 0,
            behavior: 'smooth'
        });

    } else if (e.target.classList.contains('mobile-nav__link')) {
        const linkTarget = e.target.getAttribute('href').slice(1);
        const targetOffset = document.getElementById(linkTarget).offsetTop;

        window.scroll({
            top: targetOffset,
            left: 0,
            behavior: 'smooth'
        });

        toggleNavigation();
    }

}

// toggle nav function
function toggleNavigation(e) {

    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--collapsed');
    document.body.classList.toggle('disable-scroll');
}


// chages main-nav's position to fixed onscroll
window.onscroll = function () {

    const mainNav = document.getElementById('main-nav');

    if (this.scrollY > 189) {
        mainNav.classList.add('main-nav--fixed');
    } else {
        mainNav.classList.remove('main-nav--fixed');
    }
}

// JS media queries
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 879px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {

    const cogsElement = document.querySelector('.cogs-graphic');
    mq.matches ? cogsElement.setAttribute('data', 'img/lightbulb.svg') : cogsElement.setAttribute('data', 'img/cogs.svg');
}

// typewriter effect - variables
const myFavouriteStrings = [
		  "solving programming problems",
		  "playing the saxophone",
          "coding",
		  "music",
		  "David Lynch movies",
          "food"
		];

const typewriterOutput = document.getElementById('typewriter-output');

// typewriter effect - function
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