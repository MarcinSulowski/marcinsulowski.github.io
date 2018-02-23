document.addEventListener('DOMContentLoaded', function () {
    menuDrop();
});

function menuDrop (e) {
    document.getElementById("dropdown-button").addEventListener('click', function (e) {
        if (this.nextElementSibling.classList.contains('show')) {
            this.nextElementSibling.removeAttribute('class');
            document.getElementById('main-heading').removeAttribute('style');
        } else {
            this.nextElementSibling.setAttribute('class', 'show');
            document.getElementById('main-heading').style.marginTop = '80px';
        }
        e.stopPropagation();
    });

    document.body.addEventListener('click', function () {
        document.getElementById('dropdown-menu').removeAttribute('class');
        document.getElementById('main-heading').removeAttribute('style');

    });
}
