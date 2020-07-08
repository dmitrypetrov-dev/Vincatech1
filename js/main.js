// burger menu

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    if ($(window).width() < 769) {
        $('.dropdown-menu').click(function (event) {
            $('.drop-menu-burger').toggleClass('open');
            $('.dropdown-menu').toggleClass('arrow-rotate');
        });
    }
});


// jquery slider

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

//modal windows

$(function () {

    $('.popup-meeting').on('click', function () {
        $('.popup').addClass('open');
    });

    $('.popup-close').on('click', function () {
        $('.popup').removeClass('open');
    });

    $('.popup-quote').on('click', function () {
        $('.popup-2').addClass('open');
    });

    $('.popup-close').on('click', function () {
        $('.popup-2').removeClass('open');
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.popup').removeClass('open');
            $('.popup-2').removeClass('open');
        }
    });

});

//scroll down arrow

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

    if (btnScrollDown !== null) {
        btnScrollDown.addEventListener('click', scrollDown);
    }
})();



