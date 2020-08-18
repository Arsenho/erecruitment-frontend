import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppelOffreComponent } from './appel-offre/appel-offre.component';
import { AppelOffreDetailComponent } from './appel-offre-detail/appel-offre-detail.component';
import { AllAppelOffrePageComponent } from './all-appel-offre-page/all-appel-offre-page.component';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { CompanieComponent } from './companie/companie.component';
import { TestComponent } from './test/test.component';
import { ServicesModule } from '../services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { PostulerComponent } from './postuler/postuler.component';
import { AcceuilModule } from '../acceuil/acceuil.module';

@NgModule({
  declarations: [
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
    CompanieComponent,
    TestComponent,
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
    CompanieComponent,
    TestComponent,
    PostulerComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AcceuilModule,
  ],
  exports: [
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
    PostulerComponent,
  ],
})
export class PosterModule {}
