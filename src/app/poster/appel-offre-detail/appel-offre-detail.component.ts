import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-appel-offre-detail',
  templateUrl: './appel-offre-detail.component.html',
  styleUrls: ['./appel-offre-detail.component.css']
})
export class AppelOffreDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      // executes when HTML-Document is loaded and DOM is ready
     console.log("document is ready");
       
     
       
     // document ready  
     });
     
     
     window.onload = function() {
      // executes when complete page is fully loaded, including all frames, objects and images
     console.log("window is loaded");
       
       
     // window load  
     };
     
     
     
  }

}
