import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from "ngx-cookie-service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged_user
  constructor(private loginService: LoginService,
    private router: Router, private userService: UserService,
    private cookieService: CookieService) {
      this.logged_user = {
        id: -1
      }
      this.get_logged_user()
      this.show_logout()
    }

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
        this.cookieService.delete('csrftoken')
        this.router.navigate(['/home'])
      },
      (err) => {
        console.error(err);

      }
    )
  }

  signin() {
    this.router.navigate(['signin'])
  }

  signup() {
    this.router.navigate(['signup'])
  }

  show_logout() {
    let result = false
    if (this.logged_user.id != -1 && this.cookieService.get('csrftoken') != '') {
      result = true
    }
    return result
  }

  get_logged_user(){
    this.userService.get_logged_user().subscribe(
      (data: any) => {
        this.logged_user = data
      },
      (err) => {
        console.error(err);
        this.logged_user.id = -1
      }
    )
  }

}
