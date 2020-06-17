//скролл вниз по нажатию на стрелку

(function() {
    'use strict';
    var btnScrollDown = document.querySelector('.intro__arrow');
    function scrollDown() {
        var windowCoords = 1270;
        console.log(windowCoords);
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
        })();
    }
    btnScrollDown.addEventListener('click', scrollDown);
})();