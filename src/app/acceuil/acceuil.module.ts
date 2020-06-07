import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component'; 

@NgModule({
  declarations: [SectionTwoComponent,SectionOneComponent ,HeaderComponent, SectionComponent, FooterComponent, Section1Component, HomepageComponent, SectionOneComponent, SectionTwoComponent],
  imports: [
  
    MatIconModule,
    MatToolbarModule
  
  ],
  exports:[HeaderComponent, SectionComponent, FooterComponent,HomepageComponent,MatIconModule,
    MatIconModule,MatToolbarModule,SectionTwoComponent,SectionOneComponent , Section1Component
  ]
})
export class AcceuilModule { }
