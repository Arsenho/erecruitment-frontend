import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //http://www.sitepoint.com/scroll-based-animations-jquery-css3/
var $animation_elements = $('.slide');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) $element.addClass('hasSlid');
    else $element.removeClass('hasSlid');
  });
}
$window.on('scroll resize', check_if_in_view);









//$window.trigger('scroll');
      /*$element.animate({
        marginLeft: 100
      }, "slow").fadeIn("slow", 1);*/



/*


$.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) $element.addClass('hasSlid');
    else $element.removeClass('hasSlid');
  });
  
  
  
*/
  }

}
