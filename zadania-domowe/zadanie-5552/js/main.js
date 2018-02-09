$(document).ready(function () {
    $('.navbar-nav a').click(function () {
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - $('.navbar').outerHeight())
        }, 800);
    })
});

window.onscroll = function () {
    var nav = document.getElementsByClassName('navbar')[0];
    if (this.scrollY > (document.getElementById('main-header').offsetHeight - nav.offsetHeight)) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }
}

