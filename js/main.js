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

    $('.burger-menu').click(function (event) {
        $('.drop-menu-burger').slideToggle();
        $('.burger-menu').toggleClass('arrow-rotate');
    });
});

// jquery slider

$(document).ready(function () {
    if ($(".slider").length && $(window).width() > 375) {
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






