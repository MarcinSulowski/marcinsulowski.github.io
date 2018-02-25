document.getElementById('nav-menu').addEventListener('click', function (e) {
    e.preventDefault();

    var elemRect = e.target.getBoundingClientRect(),
        indicator = document.getElementById('indicator').getBoundingClientRect(),
        slide = (elemRect.left + elemRect.width / 2) - 256 + 'px',
        links = document.querySelectorAll('.menu-item a');

    for (var i of links) {
        if (i.classList.contains('active')) {
            i.removeAttribute('class');
        }
    }
    
    e.target.setAttribute('class', 'active');
    document.getElementById('indicator').style.left = slide;
});