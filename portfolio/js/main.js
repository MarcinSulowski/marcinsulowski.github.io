const themeSwitch = document.getElementById('theme-switch');
const allLinks = document.querySelectorAll('a');
const projectItems = document.querySelectorAll('.works-item');

themeSwitch.addEventListener('click', function () {
    document.body.classList.toggle('night-theme');
    
    for (let i of allLinks) {
        i.classList.toggle('night-theme');
    }
    
    for (let i of projectItems) {
        i.classList.toggle('night-theme');
    }

})