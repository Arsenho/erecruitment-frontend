import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppelOffreComponent } from './appel-offre/appel-offre.component';
import { AppelOffreDetailComponent } from './appel-offre-detail/appel-offre-detail.component';
import { AllAppelOffrePageComponent } from './all-appel-offre-page/all-appel-offre-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { CompanieComponent } from './companie/companie.component';
import { TestComponent } from './test/test.component';
import { PostulerComponent } from './postuler/postuler.component';
import { AcceuilModule } from '../acceuil/acceuil.module';


@NgModule({
  declarations: [AppelOffreComponent, AppelOffreDetailComponent, AllAppelOffrePageComponent, TableComponent, CompanieComponent, TestComponent, PostulerComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTablesModule,
    AcceuilModule
    
    
  ],
  exports:[
    AppelOffreComponent,AppelOffreDetailComponent, AllAppelOffrePageComponent,TableComponent, MatTableModule,MatPaginatorModule, MatSortModule
  ,PostulerComponent]
})
export class PosterModule { }

