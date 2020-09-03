// jquery slider

$(document).ready(function () {
    if ($(window).width() > 480 && $(window).width() < 601) {
        $('.about-slider').slick({
            arrows: false,
            dots: true,
            infinite: false,
            fade: false,
            dotsClass: 'about__slider-buttons',
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '59px',
            slidesToShow: 1,
        });
    } else if ($(window).width() > 414 && $(window).width() < 481) {
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
            centerPadding: '58px',
            slidesToShow: 1,
        });
    } else if ($(window).width() > 375 && $(window).width() < 415) {
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
            centerPadding: '42px',
            slidesToShow: 1,
        });
    } else $('.about-slider').slick({
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
});





