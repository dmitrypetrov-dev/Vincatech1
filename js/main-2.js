// jquery slider

$(document).ready(function () {
    if ($(window).width() < 376) {
        $('.about-slider').slick({
            arrows: false,
            dots: true,
            infinite: false,
            fade: false,
            dotsClass: 'slider-buttons',
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '40px',
        });
    }
});





