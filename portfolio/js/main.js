document.addEventListener('DOMContentLoaded', function () {
    switchTheme().onTime();
    type(myFavouriteStrings, documentElements.typewriterOutput);
});

/*
document elements
*/

const documentElements = {
    cogsGraphic:    document.querySelector('.cogs-graphic'),
    mobileMenu:     document.querySelector('.mobile-menu'),
    form:           document.querySelector('form'),
    infoBtns:       document.querySelectorAll('.info-btn'),
    typewriterOutput: document.getElementById('typewriter-output'),
    mobileNav:      document.getElementById('mobile-nav'),
    mainNav:        document.getElementById('main-nav'),
    themeSwitch:    document.getElementById('theme-switch'),
};

/*
event listeners 
*/

documentElements.mainNav.addEventListener('click', smoothScroll);
documentElements.mobileNav.addEventListener('click', smoothScroll);

documentElements.infoBtns.forEach(function (element) {
    element.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('visible');
    })
});

/*
functions
*/


// switch theme function
const switchTheme = () => {

    const toggle = () => {
        document.body.classList.toggle('night-theme');
    }

    const onTime = () => {
        const date = new Date();

        if ( date.getHours() >= 20 || date.getHours() <= 6 ) {
            toggle();
            documentElements.themeSwitch.checked = true;
        }
    }

    return {
        toggle,
        onTime
    };
}

function smoothScroll(e) {

    e.preventDefault();

    const linkTarget = e.target.getAttribute('href');
    const targetOffset = document.querySelector(linkTarget).offsetTop;
    let scrollTop = 0;

    if ( e.target.classList.contains('main-nav__link') ) {

        const navDimensions = this.getBoundingClientRect();
        scrollTop = targetOffset - navDimensions.height;


    } else if ( e.target.classList.contains('mobile-nav__link') ) {

        scrollTop = targetOffset;
        toggleNavigation();
    }

    window.scroll({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
    });

}

// toggle nav function
function toggleNavigation(e) {

    documentElements.mobileMenu.classList.toggle('mobile-menu--collapsed');
    document.body.classList.toggle('disable-scroll');
}

// changes main-nav's position to fixed on scroll
window.onscroll = function () {

    if ( this.scrollY > 189 ) {
        documentElements.mainNav.classList.add('main-nav--fixed');
    } else {
        documentElements.mainNav.classList.remove('main-nav--fixed');
    }
}

// JS media queries
if ( matchMedia ) {
    const mq = window.matchMedia("(max-width: 879px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    mq.matches ? documentElements.cogsGraphic.setAttribute('data', 'img/lightbulb.svg') : documentElements.cogsGraphic.setAttribute('data', 'img/cogs.svg');
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


// typewriter effect - function
function type( strings, outputElement ) {

    const typeSpeed = 80,
        deleteSpeed = 30,
        waitBetween = 500;

    let sentenceIndex = 0,
        currentChar = 0,
        deleteInterval = null;

    function typeString() {

        if ( sentenceIndex >= strings.length ) {
            sentenceIndex = 0;
        }

        const chars = strings[ sentenceIndex ].split('');

        setTimeout(function () {
            if ( currentChar >= chars.length ) {
                setTimeout(function () {
                    sentenceIndex++;

                    deleteInterval = setInterval(function () {
                        outputElement.innerHTML = outputElement.innerHTML.substr(0, currentChar - 1);

                        currentChar--;

                        if ( currentChar == 0 ) {
                            clearInterval(deleteInterval);
                            typeString();
                        }
                    }, deleteSpeed);
                }, waitBetween);

                return;
            }

            outputElement.innerHTML += chars[ currentChar ];
            currentChar++;

            typeString();
        }, typeSpeed);
    }

    typeString();
}