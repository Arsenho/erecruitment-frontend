import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { PosterModule } from './poster/poster.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule,
    AuthentificationModule,
    PosterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
