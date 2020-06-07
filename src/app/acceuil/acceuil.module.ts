import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [HeaderComponent, SectionComponent, FooterComponent, Section1Component, HomepageComponent],
  imports: [
  
    MatIconModule,
    MatToolbarModule
  
  ],
  exports:[HeaderComponent, SectionComponent, FooterComponent,HomepageComponent,MatIconModule,
    MatIconModule,MatToolbarModule
  ]
})
export class AcceuilModule { }
