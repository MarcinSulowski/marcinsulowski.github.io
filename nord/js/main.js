(function () {

    const testimonialNavLinks = document.querySelectorAll('.slides-nav--testimonials .slides-nav__link');
    const aboutNavLinks = document.querySelectorAll('.slides-nav--about .slides-nav__link');
    const testimonialSlides = document.querySelectorAll('.testimonial');
    const aboutSlides = document.querySelectorAll('.slides__items');

    const deactivateElms = (elm = []) => {
        elm.forEach((elm) => {
            elm.classList.remove('active');
        });
    };

    const animateSlides = (links = [], slides = []) => {
        links.forEach((link) => {

            const linkHref = link.getAttribute('href');
            const hrefTarget = document.querySelector(linkHref);
            
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                deactivateElms(links);
                deactivateElms(slides);

                link.classList.toggle('active');
                hrefTarget.classList.add('active');
            })
        });
    };

    animateSlides(testimonialNavLinks, testimonialSlides);
    animateSlides(aboutNavLinks, aboutSlides);

}());