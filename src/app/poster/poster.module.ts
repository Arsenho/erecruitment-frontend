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




@NgModule({
  declarations: [
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
    CompanieComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AppelOffreComponent,
    AppelOffreDetailComponent,
    AllAppelOffrePageComponent,
    TableComponent,
  ]
})
export class PosterModule { }
