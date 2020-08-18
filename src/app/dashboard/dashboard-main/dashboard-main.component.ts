import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#check").click(function(){
        $("label").toggleClass("strike");
      });
    });
  }

}
