import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {MatIconModule} from '@angular/material/icon'; 
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { PosterModule } from '../poster/poster.module';





@NgModule({
  declarations: [SignupLoginComponent, UserprofileComponent],
  imports: [
    CommonModule,
    MatIconModule,
   
    MatTableModule,
    MatSortModule,
    NgxPaginationModule,
    PosterModule 
  ],
  exports:[SignupLoginComponent,UserprofileComponent]
})
export class AuthentificationModule { }
