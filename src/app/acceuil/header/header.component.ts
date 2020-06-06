import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { LoginService } from 'src/app/authentification/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

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

  logout () {
    this.loginService.logout().subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/home'])
      },
      (err) => {
        console.error(err);

      }
    )
  }

}
