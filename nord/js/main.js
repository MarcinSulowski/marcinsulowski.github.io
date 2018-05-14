const testimNavLinks = document.querySelectorAll('.slides-nav--testimonials .slides-nav__link');
const testimonials = document.querySelectorAll('.testimonial');

testimNavLinks.forEach(function (link) {
    
    link.addEventListener('click', function (e) {
        e.preventDefault();

        for (let i = 0; i < testimNavLinks.length; i++) {
            if (testimNavLinks[i].classList.contains('active')) {
                testimNavLinks[i].classList.remove('active');
            }
        }

        link.classList.add('active');

        testimonials.forEach(function (el) {

            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        })

        const href = link.getAttribute('href');
        const testimonial = document.querySelector(href);
        testimonial.classList.add('active');
    })
})