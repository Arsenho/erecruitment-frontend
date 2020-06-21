import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginService } from '../services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoginComponent } from './login/login.component';
import { ServicesModule } from '../services/services.module';
import { PosterModule } from '../poster/poster.module';
import { AppMaterialModule } from '../app-material/app-material.module';





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
    NgxPaginationModule,
    ServicesModule,
    PosterModule,
    AppMaterialModule
  ],
  exports: [
    SignupLoginComponent,
    UserprofileComponent,
    LoginComponent,
    PosterModule
  ],
  providers: [LoginService],
})
export class AuthentificationModule { }
