import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './acceuil/homepage/homepage.component';
import { UserprofileComponent } from './authentification/userprofile/userprofile.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
   {path: 'userProfile', component: UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
