import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import slick from 'slick-carousel';

UIkit.use(Icons);

$(document).ready(function() {
  console.log('hello');

  $('.last-projects__slider').slick({
    dots: true,
    speed: 500
  });
});
