/*
expandable menu toggle
*/

function toggleNavigation(e) {

    document.querySelector('#expandable-menu').classList.toggle('collapsed');
    document.body.classList.toggle('disable-scroll');

}

/*
scroll to section
*/

function sectionScroll() {

    const currentPosition = window.pageYOffset,
        windowHeight = window.innerHeight,
        offset = windowHeight + currentPosition;

    $('html, body').animate({
        scrollTop: offset
    }, 800);

}


/*
smooth scroll and menu collapse on click
*/

const anchorLinks = document.querySelectorAll('a[href*="#"]');

for (let i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function () {

        toggleNavigation();
        const hash = this.getAttribute('href');

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    })
}

/* 
nav color change 
*/

$(window).scroll(function () {

    const chevron = $('#chevron-scroll');


    if ($(this).scrollTop() > ($(this).height() - 80)) {

        $('.nav-toggle-button span, .lang-nav-item > a').addClass('white');

    } else {

        $('.nav-toggle-button span, .lang-nav-item > a').removeClass('white');
    }

    if ($(chevron).offset().top > $('#main-header').height()) {

        $(chevron).addClass('white');

    } else {

        $(chevron).removeClass('white');
    }

    if ($(this).scrollTop() > (window.innerHeight * 3.8)) {
        chevron.removeClass('bottom').addClass('up');
    } else if ($(this).scrollTop() < $('#main-header').height()) {
        chevron.removeClass('up').addClass('bottom');
    }
});