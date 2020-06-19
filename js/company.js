// jquery слайдер
$(document).ready(function () {
    $('.slider-2').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        dotsClass: 'slider-buttons',
        autoplay: 1500,
        speed: 1000,
        cssEase: 'linear',
    });
});