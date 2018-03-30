const themeSwitch = document.getElementById('theme-switch');
const allLinks = document.querySelectorAll('a');
const projectItems = document.querySelectorAll('.projects-item');
const mainNav = document.getElementById('main-nav');

themeSwitch.addEventListener('click', function () {
    document.body.classList.toggle('night-theme');

    for (let i of allLinks) {
        i.classList.toggle('night-theme');
    }

    for (let i of projectItems) {
        i.classList.toggle('night-theme');
    }

    mainNav.classList.toggle('night-theme');

})

window.onscroll = function () {
    let scroll = window.scrollY;
    const navOffset = mainNav.getBoundingClientRect();

    if (scroll > 230) {
        mainNav.classList.add('fixed');
    } else {
        mainNav.classList.remove('fixed');
    }
};