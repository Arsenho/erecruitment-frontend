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
  errors = null;
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
        console.log(data);

        if (this.user.is_active){
          this.router.navigate(['/home'])
        }
      },
      (err) => {
        console.log(err.error);
        this.errors = err.error
      }
    )
  }

  signup(){
    console.log(this.user);
    if (this.user.nature == 'candidate'){
      this.loginService.createCandidate(this.user).subscribe(
        (data) => {
          this.user = data
          if (this.user.is_active){
            this.router.navigate(['/login'])
          }
        },
        (err) => {
          this.errors = err
        }
      )
    }else if (this.user.nature == 'employer'){
      this.loginService.createEmployer(this.user).subscribe(
        (data) => {
          this.user = data
          if (this.user.is_active){
            this.router.navigate(['/login'])
          }
        },
        (err) => {
          this.errors = err
        }
      )
    }

  }
}
