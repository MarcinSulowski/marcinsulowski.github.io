const themeSwitch = document.getElementById('theme-switch');
const allLinks = document.querySelectorAll('a');
const projectItems = document.querySelectorAll('.projects-item');

themeSwitch.addEventListener('click', function () {
    document.body.classList.toggle('night-theme');
    
    for (let i of allLinks) {
        i.classList.toggle('night-theme');
    }
    
    for (let i of projectItems) {
        i.classList.toggle('night-theme');
    }

})

//
//const mq = window.matchMedia( "(max-width: 900px)" );
//const itemNo = document.querySelectorAll('.item-number');
//
//if (mq.matches) {
//    for (let i of itemNo) {
//        i.innerHTML = '<sub>0</sub>' + 1;
//    }
//    
//} else {
//  // window width is less than 500px
//}