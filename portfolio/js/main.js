const themeSwitch = document.getElementById('theme-switch');
const allLinks = document.querySelectorAll('a');

themeSwitch.addEventListener('click', function () {
    document.body.classList.toggle('day-theme');
    
    for (let i of allLinks) {
        i.classList.toggle('day-theme');
    }


})