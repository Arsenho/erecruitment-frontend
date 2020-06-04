import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [HeaderComponent, SectionComponent, FooterComponent, Section1Component, HomepageComponent],
  exports:[HeaderComponent, SectionComponent, FooterComponent,HomepageComponent]
})
export class AcceuilModule { }
