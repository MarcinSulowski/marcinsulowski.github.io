document.addEventListener('DOMContentLoaded', function () {
    runTyping();
    switchTheme().onTime();
});

//  event listeners 

document.querySelector('.main-nav').addEventListener('click', smoothScroll);
document.querySelector('.mobile-nav').addEventListener('click', smoothScroll);
document.querySelector('.mobile-nav').addEventListener('click', toggleNavigation);

document.getElementById('form-submit-btn').addEventListener('click', function () {
    
    let url = "https://formspree.io/mr." + "sulowski" + "@" + "gmail" + "." + "com";    
    this.parentElement.setAttribute('action', url);
});

// functions

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
    
    if ( this.scrollY > 189 ) {
        mainNav.classList.add('main-nav--fixed');
    } else {
        mainNav.classList.remove('main-nav--fixed');
    }
}


const runTyping = () => {
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

    
//const projectInfoBtns = document.querySelectorAll('.project-info-btn');
//
//for ( let i = 0; i < projectInfoBtns.length; i++ ) {
//    
//    projectInfoBtns[i].addEventListener('click', function (e) {
//        this.nextElementSibling.classList.toggle('visible');
//    })
//}
