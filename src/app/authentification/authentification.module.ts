import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginComponent } from './signup-login/signup-login.component';



@NgModule({
  declarations: [SignupLoginComponent],
  imports: [
    CommonModule
  ],
  exports:[SignupLoginComponent]
})
export class AuthentificationModule { }
