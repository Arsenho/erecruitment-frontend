import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { LoginService } from '../../services/login.service';
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
        nature: ''
      }
    }

  ngOnInit(): void {
  }


  signup(){
    console.log(this.user);
    if (this.user.nature == 'candidate'){
      this.loginService.createCandidate(this.user).subscribe(
        (data) => {
          this.user = data
          if (this.user.is_active){
            this.router.navigate(['/segnin'])
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
            this.router.navigate(['/signin'])
          }
        },
        (err) => {
          this.errors = err
        }
      )
    }

  }
}
