import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  errors = null;
  constructor(private loginService: LoginService,
    private router: Router, private userService: UserService) {
      this.user = {
        username: '',
        password: ''
      }
    }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.user).subscribe(
      (data: any) => {
        this.user = data
        console.log(data);

        if (this.user.is_active){
          this.userService.setUser(this.user)
          this.router.navigate(['/home'])
        }
      },
      (err) => {
        console.log(err.error);
        this.errors = err.error
      }
    )
  }


}
