import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [SignupLoginComponent, UserprofileComponent],
  imports: [
    CommonModule
  ],
  exports:[SignupLoginComponent,UserprofileComponent]
})
export class AuthentificationModule { }
