import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppelOffreComponent } from './appel-offre/appel-offre.component';
import { AppelOffreDetailComponent } from './appel-offre-detail/appel-offre-detail.component';
import { AllAppelOffrePageComponent } from './all-appel-offre-page/all-appel-offre-page.component';



@NgModule({
  declarations: [AppelOffreComponent, AppelOffreDetailComponent, AllAppelOffrePageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AppelOffreComponent,AppelOffreDetailComponent, AllAppelOffrePageComponent
  ]
})
export class PosterModule { }
