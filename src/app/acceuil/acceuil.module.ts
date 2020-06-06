import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    Section1Component,
    HomepageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    HomepageComponent
  ]
})
export class AcceuilModule { }
