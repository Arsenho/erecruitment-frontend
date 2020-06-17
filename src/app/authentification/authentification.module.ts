import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginService } from '../services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { ServicesModule } from '../services/services.module';




@NgModule({
  declarations: [
    SignupLoginComponent,
    UserprofileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule,
    ServicesModule
  ],
  exports: [
    SignupLoginComponent,
    UserprofileComponent,
    LoginComponent
  ],
  providers: [LoginService],
})
export class AuthentificationModule { }
