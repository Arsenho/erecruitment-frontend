import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  user;
  constructor(private loginService: LoginService,
    private router: Router) {
      this.user = {
        username: '',
        password: ''
      }
    }

  ngOnInit(): void {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () =>
      container.classList.add('right-panel-active'));

    signInButton.addEventListener('click', () =>
      container.classList.remove('right-panel-active'));
  }

  login() {
    this.loginService.login(this.user).subscribe(
      (data: any) => {
        this.user = data
        if (this.user.is_active){
          this.router.navigate(['/home'])
        }
      },
      (err) => {
        console.error(err);

      }
    )
  }

  signup(){
    console.log(this.user);

    /*this.loginService.createUser(this.user).subscribe(
      (data) => {
        this.user = data
        if (this.user.is_active){
          this.router.navigate(['/login'])
        }
      }
    )*/
  }
}
