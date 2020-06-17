import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { PosterModule } from './poster/poster.module';
import { UserModule } from './user/user.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from "ngx-cookie-service"


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule,
    AuthentificationModule,
    PosterModule,
    UserModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
