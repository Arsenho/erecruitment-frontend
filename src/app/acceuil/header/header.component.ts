import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      // executes when HTML-Document is loaded and DOM is ready

      // breakpoint and up  
      $(window).resize(function () {
        if ($(window).width() >= 980) {
          // when you hover a toggle show its dropdown menu
          $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show");
          });

          // hide the menu when the mouse leaves the dropdown
          $(".navbar .dropdown-menu").mouseleave(function () {
            $(this).removeClass("show");
          });
          // do something here
        }
      });
      // document ready  
    });
  }

}
