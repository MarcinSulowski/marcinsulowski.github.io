const sideNav = document.getElementById('side-nav'),
    sideNavLinks = document.querySelectorAll('#side-nav a');

let clickCount = 0;

const toggleTheme = () => {
    clickCount++;

    const styleLink = document.getElementById('night-theme-style');
    if (clickCount % 2 !== 0) {
        styleLink.href = 'css/night-theme-style.css';
    } else {
        styleLink.href = '';
    }
}

window.onscroll = function () {

    if (this.scrollY > 20) {
        sideNav.classList.add('visible');
    } else {
        sideNav.classList.remove('visible');
    }

    if (this.scrollY < (this.innerHeight)) {
        deactivateLinks();
        sideNavLinks[0].classList.add('active');
    } else if (this.scrollY > (this.innerHeight) && this.scrollY < ((this.innerHeight) * 2)) {
        deactivateLinks();
        sideNavLinks[1].classList.add('active');
    } else if (this.scrollY > ((this.innerHeight) * 2) && this.scrollY < ((this.innerHeight) * 3)) {
        deactivateLinks();
        sideNavLinks[2].classList.add('active');
    } else if (this.scrollY > ((this.innerHeight) * 3) && this.scrollY < ((this.innerHeight) * 4)) {
        deactivateLinks();
        sideNavLinks[3].classList.add('active');
    }
};

const deactivateLinks = () => {
    for (let i of sideNavLinks) {
        i.classList.remove('active');
    }
}

sideNav.addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        deactivateLinks();
        e.target.classList.add('active');
    }
})

//function getCoordinates(elem) {
//    const elementCord = document.getElementById(elem).getBBox();
//    const y = (elementCord.y + (elementCord.height / 2)).toFixed(0);
//    const x = (elementCord.x + (elementCord.width / 2)).toFixed(0);
//    console.log(x, y);
//};