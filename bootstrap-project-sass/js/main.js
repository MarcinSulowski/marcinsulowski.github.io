// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $('a').on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

$('a[href*="#"]').click(function () {
   var anchor = $(this).attr('href');
   $('html, body').animate({
       scrollTop: $(anchor).offset().top - 74
     }, 800);
})


$("a[href*='http']").click(function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $('body').fadeOut(1000, function () {
        window.location.href = url;
    });
});


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var navHeight = $('#main-nav').outerHeight();

    /* Menu change color*/
    if ($(this).scrollTop() > navHeight) {
        $('#main-nav').addClass('nav-scroll');
    } else {
        $('#main-nav').removeClass('nav-scroll');
    }

    /* Progress bar */
    var progBar = scrollTop * 100 / ($('body').height() - $(window).height()) + '%';

    $('.progressbar').css({
        width: progBar
    });
})
