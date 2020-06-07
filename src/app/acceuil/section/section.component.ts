import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
    $(function() {
      $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
      });
    });
  }

}
