$('h3').click(function () {
    var paragraph = $(this.nextElementSibling);
    paragraph.animate({
        height: '80px',
        padding: '10px'
    }, 200, function () {
        $('p').not(this).css({
            height: '0',
            padding: '0 10px'
        })
    });
});