//скролл вниз по нажатию на стрелку

(function () {
    'use strict';
    var btnScrollDown = document.querySelector('.intro__arrow');

    function scrollDown() {
        var windowCoords = 1270;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();

// jquery слайдер

$(document).ready(function () {
    $('.slider').slick({
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