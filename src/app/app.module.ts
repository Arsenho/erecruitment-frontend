import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { PosterModule } from './poster/poster.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from "ngx-cookie-service"
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule,
    AuthentificationModule,
    PosterModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
