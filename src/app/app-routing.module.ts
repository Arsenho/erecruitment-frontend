import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './acceuil/homepage/homepage.component';
import { SignupLoginComponent } from './authentification/signup-login/signup-login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  { path: 'login', component:SignupLoginComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
