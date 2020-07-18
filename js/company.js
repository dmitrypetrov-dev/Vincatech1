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
    $(window).scroll(function () {
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
    if ($(window).width() > 375) {
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

    $('.play-icon').on('click', function () {
        $('.popup-video').addClass('open');
    });
    $('.popup-video__close').on('click', function () {
        $('.popup-video').removeClass('open');
        $('.wp-video-shortcode').get(0).pause();
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.popup').removeClass('open');
            $('.popup-video').removeClass('open');
            $('.wp-video-shortcode').get(0).pause();
        }
    });

});

// numbers animation

$(function () {

    var target_block = $(".stats__number-1"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".stats__number-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".stats__number-2"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".stats__number-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".stats__number-3"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".stats__number-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".stats__number-4"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".stats__number-4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});