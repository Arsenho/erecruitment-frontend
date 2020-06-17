import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { ServicesModule } from '../services/services.module';
import { CookieService } from "ngx-cookie-service"



@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    Section1Component,
    HomepageComponent,
    SectionTwoComponent,
    SectionOneComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    ServicesModule,
  ],
  exports: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    Section1Component,
    HomepageComponent,
    SectionTwoComponent,
    SectionOneComponent,
  ],
  providers: [
    CookieService
  ]
})

export class AcceuilModule { }
