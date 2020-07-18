// jquery slider

$(document).ready(function () {
    if ($(window).width() < 376) {
        $('.about__columns').slick({
            arrows: false,
            dots: true,
            infinite: true,
            fade: false,
            dotsClass: 'slider-buttons',
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 400,
            cssEase: 'linear',
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
});





