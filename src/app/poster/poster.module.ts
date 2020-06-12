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



@NgModule({
  declarations: [AppelOffreComponent, AppelOffreDetailComponent, AllAppelOffrePageComponent, TableComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTablesModule
  ],
  exports:[
    AppelOffreComponent,AppelOffreDetailComponent, AllAppelOffrePageComponent,TableComponent, MatTableModule,MatPaginatorModule, MatSortModule
  ]
})
export class PosterModule { }
