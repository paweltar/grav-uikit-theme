import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import slick from 'slick-carousel';
import uikitCss from 'uikit/dist/css/uikit.css'
import slickCss from 'slick-carousel/slick/slick.css';

UIkit.use(Icons);

$(document).ready(function() {
    console.log('hello');

    $('.last-projects__slider').slick({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: ".slider__button--prev",
        nextArrow: ".slider__button--next",
        fade: true,
        cssEase: 'linear'
    });
});

window.clearSearchBox = function(query) {
    var searchBox = document.getElementById('dictionary-search-input');
    console.log(query);
    searchBox.value = query;
    triggerEvent(searchBox, 'keyup');
    return true;
}

window.triggerEvent = function(el, type){
   if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent('on'+e.eventType, e);
    }
}
