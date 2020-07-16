// jquery slider

$(document).ready(function () {
    if ($(window).width() < 376) {
        $('.about__columns').slick({
            arrows: false,
            dots: true,
            infinite: true,
            fade: false,
            dotsClass: 'slider-buttons',
            autoplay: 1500,
            speed: 1500,
            cssEase: 'linear',
        });
    }
});





