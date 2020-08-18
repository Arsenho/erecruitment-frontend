import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-dashbordtest',
  templateUrl: './dashbordtest.component.html',
  styleUrls: ['./dashbordtest.component.css']
})
export class DashbordtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    $(document).ready(function(){
      $("#check").click(function(){
        $("label").toggleClass("strike");
      });
    }); 
  }
 
  
}
