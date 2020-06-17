import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './acceuil/homepage/homepage.component';
import { SignupLoginComponent } from './authentification/signup-login/signup-login.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './authentification/userprofile/userprofile.component';
import { AppelOffreComponent } from './poster/appel-offre/appel-offre.component';
import { LoginComponent } from './authentification/login/login.component';


const routes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  { path: 'signup', component: SignupLoginComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'userProfile', component: UserprofileComponent },
  { path: 'offres', component: AppelOffreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
