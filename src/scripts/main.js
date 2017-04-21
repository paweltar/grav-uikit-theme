import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import slick from 'slick-carousel';

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
