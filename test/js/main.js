function toggleNavigation() {
    document.querySelector('#expandable-menu').classList.toggle('collapsed');
    document.body.classList.toggle('disable-scroll');
}

document.getElementById('main-nav').addEventListener('click', function (e) {
    document.querySelector('#expandable-menu').classList.toggle('collapsed');
})

/*
smooth scroll
*/

$('a[href*="#"]').click(function () {
    const anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 800);
});

/* 
nav color change 
*/

$(window).scroll(function () {

    if ($(this).scrollTop() > ($(this).height() - 80)) {
        
        $('.nav-toggle-button span, .lang-nav-item > a').addClass('white');
        
    } else {
        
        $('.nav-toggle-button span, .lang-nav-item > a').removeClass('white');
    }

    if ($('.chevron.bottom').offset().top > $('#main-header').height()) {
        
        $('.chevron.bottom').addClass('white');
    } else {
        
        $('.chevron.bottom').removeClass('white');
    }

});