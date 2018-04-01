const allLinks = document.querySelectorAll('a');
const projectItems = document.querySelectorAll('.projects-item');
const mainNav = document.getElementById('main-nav');
const sideNav = document.getElementById('side-nav');
const sideNavLinks = document.querySelectorAll('#side-nav a')


const toggleTheme = () => {
    document.body.classList.toggle('night-theme');

    for (let i of allLinks) {
        i.classList.toggle('night-theme');
    }

    for (let i of projectItems) {
        i.classList.toggle('night-theme');
    }

    sideNav.classList.toggle('night-theme');
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

function getCoordinates (elem) {
    const elementCord = document.getElementById(elem).getBBox();
	const y = (elementCord.y + (elementCord.height / 2)).toFixed(0);
	const x = (elementCord.x + (elementCord.width / 2)).toFixed(0);
	console.log(x, y); 
};