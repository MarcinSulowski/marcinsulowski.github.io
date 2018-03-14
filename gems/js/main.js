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

const chevronBtn = $('#chevron-scroll');

function sectionScroll() {

    const currentPosition = window.pageYOffset,
        windowHeight = window.innerHeight,
        offset = windowHeight + currentPosition;

    if (chevronBtn.hasClass('bottom')) {
        $('html, body').animate({
            scrollTop: offset
        }, 800);

    } else {
        $('html, body').animate({
            scrollTop: -offset
        }, 800);
    }

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
nav, chevron color change 
*/

$(window).scroll(function () {

    const navBtn = $('.nav-toggle-button');
    const headerHeight = $('#main-header').height();

    // fixed nav color change
    if (navBtn.offset().top > headerHeight) {
        $('.nav-toggle-button span, .lang-nav-item > a').addClass('white');
    } else {
        $('.nav-toggle-button span, .lang-nav-item > a').removeClass('white');
    }

    // chevron color change
    if (chevronBtn.offset().top > headerHeight) {
        chevronBtn.addClass('white');
    } else {
        chevronBtn.removeClass('white');
    }

    // chevron up/down change
    if ($(this).scrollTop() > (window.innerHeight * 3.8)) {
        chevronBtn.removeClass('bottom').addClass('up');
    } else if ($(this).scrollTop() < 70) {
        chevronBtn.removeClass('up').addClass('bottom');
    }

});