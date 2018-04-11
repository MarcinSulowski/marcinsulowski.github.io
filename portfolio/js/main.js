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

const showElement = () => {
    
    
    
}



window.onscroll = function () {
    
    const mainNav = document.getElementById('main-nav');
    
    if ( this.scrollY > mainNav.offsetTop ) {
        mainNav.classList.add('fixed');
    } else {
        mainNav.classList.remove('fixed');
    }

//    if (this.scrollY < (this.innerHeight)) {
//        deactivateLinks();
//        sideNavLinks[0].classList.add('active');
//    } else if (this.scrollY > (this.innerHeight) && this.scrollY < ((this.innerHeight) * 2)) {
//        deactivateLinks();
//        sideNavLinks[1].classList.add('active');
//    } else if (this.scrollY > ((this.innerHeight) * 2) && this.scrollY < ((this.innerHeight) * 3)) {
//        deactivateLinks();
//        sideNavLinks[2].classList.add('active');
//    } else if (this.scrollY > ((this.innerHeight) * 3) && this.scrollY < ((this.innerHeight) * 4)) {
//        deactivateLinks();
//        sideNavLinks[3].classList.add('active');
//    }
};
//
//const deactivateLinks = () => {
//    for (let i of sideNavLinks) {
//        i.classList.remove('active');
//    }
//}
//
//sideNav.addEventListener('click', function (e) {
//    if (e.target.matches('a')) {
//        deactivateLinks();
//        e.target.classList.add('active');
//    }
//})

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