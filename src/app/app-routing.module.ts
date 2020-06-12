import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './acceuil/homepage/homepage.component';
import { UserprofileComponent } from './authentification/userprofile/userprofile.component';
import { AllAppelOffrePageComponent } from './poster/all-appel-offre-page/all-appel-offre-page.component';
import { TableComponent } from './poster/table/table.component';
import { AppelOffreComponent } from './poster/appel-offre/appel-offre.component';



const routes: Routes = [
  {path: 'home', component: HomepageComponent},
   {path: 'userProfile', component: UserprofileComponent},
   {path: 'offres', component: AllAppelOffrePageComponent},
   {path:'table', component:TableComponent},
   {path:'nouvelleOffre', component: AppelOffreComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
