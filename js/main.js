// burger menu

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.site-navigation__cross').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.burger-menu > a').click(function (event) {
        $('.drop-menu-burger').slideToggle();
        $('.burger-arrow').toggleClass('arrow-rotate');
    });

    $('.burger-arrow').click(function (event) {
        $('.drop-menu-burger').slideToggle();
        $('.burger-arrow').toggleClass('arrow-rotate');
    });
});

// jquery slider

$(document).ready(function () {
    if ($(".slider").length && $(window).width() > 600) {
        $('.slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            fade: true,
            dotsClass: 'slider-buttons',
            autoplay: 1500,
            speed: 1000,
            cssEase: 'linear'
        });
    }
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

$(document).ready(function () {
    $('a[href^="#about"]').on('click', function(event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 500);
    });
});

//form confirmation message

$(document).ready(function () {
    $('.contacts-submit').click(function (event) {
        $('.confirmation-block, .contacts-form').toggleClass('submitted');
    });

    $('.feedback-submit').click(function (event) {
        $('.feedback-confirmation, .feedback-form').toggleClass('submitted');
    });

    $('.popup-submit').click(function (event) {
        $('.popup-confirmation, .popup__form').toggleClass('submitted');
    });
});






