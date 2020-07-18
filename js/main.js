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

//header scroll

(function () {
    var header = document.querySelector('.header');
    var headerBurger = document.querySelector('.header-burger__menu');
    var mobileLogo = document.querySelector('.mobile-logo');
    var mobileLogoImg = document.querySelector('.mobile-logo__img');
    var previousScroll = 0;
    $(window).scroll(function (){
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll || window.pageYOffset < 10) {
            header.classList.remove('header_active');
            headerBurger.classList.remove('header_active');
            mobileLogo.classList.remove('active');
            mobileLogoImg.src = "img/svg/mobile-logo.svg";
            header.style.transition = 'all .3s linear';
        } else {
            header.classList.add('header_active');
            headerBurger.classList.add('header_active');
            mobileLogo.classList.add('active');
            mobileLogoImg.src = "img/svg/header-logo.svg";
            header.style.transition = 'none';
        }
        previousScroll = currentScroll;
    });
}());


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






