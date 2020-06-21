import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './acceuil/homepage/homepage.component';
import { SignupLoginComponent } from './authentification/signup-login/signup-login.component';
import { UserprofileComponent } from './authentification/userprofile/userprofile.component';
import { AppelOffreComponent } from './poster/appel-offre/appel-offre.component';
import { LoginComponent } from './authentification/login/login.component';
import { AllAppelOffrePageComponent } from './poster/all-appel-offre-page/all-appel-offre-page.component';
import { TableComponent } from './poster/table/table.component';
import { CompanieComponent } from './poster/companie/companie.component';
import { TestComponent } from './test-offre/test/test.component';
import { DashbordtestComponent } from './test/dashbordtest/dashbordtest.component';
import { CreateTestComponent } from './test/create-test/create-test.component';
import { QuestionTabComponent } from './test/question-tab/question-tab.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'signup', component: SignupLoginComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'profile', component: UserprofileComponent },
  { path: 'offres', component: AllAppelOffrePageComponent },
  { path: 'table', component: TableComponent },
  { path: 'offres/add', component: AppelOffreComponent },
  { path: 'companie', component: CompanieComponent },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
