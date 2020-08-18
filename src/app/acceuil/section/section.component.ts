import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private router: Router) { }


  new_offer() {
    this.router.navigate(['offres/add'])
  }

  offer_list(){
    this.router.navigate(['/offres'])
  }

  ngOnInit(): void {

    $(function() {
      $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
      });
    });

  }

}
