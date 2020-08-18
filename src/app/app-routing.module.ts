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
import { ApplicantsPerPeriodComponent } from './dashboard/applicants-per-period/applicants-per-period.component';
import { CandidatesPerTestComponent } from './dashboard/candidates-per-test/candidates-per-test.component';
import { SuccessPerTestComponent } from './dashboard/success-per-test/success-per-test.component';
import { FailurePerTestComponent } from './dashboard/failure-per-test/failure-per-test.component';
import { AnsweredQuestionsPerTestComponent } from './dashboard/answered-questions-per-test/answered-questions-per-test.component';
import { ParticipantPercentagePerTestComponent } from './dashboard/participant-percentage-per-test/participant-percentage-per-test.component';
import { PostulerComponent } from './poster/postuler/postuler.component';
import { AppelOffreDetailComponent } from './poster/appel-offre-detail/appel-offre-detail.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'signup', component: SignupLoginComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'profile', component: UserprofileComponent },
  { path: 'offres', component: AllAppelOffrePageComponent },
  { path: 'table', component: TableComponent },
  { path: 'offres/add', component: AppelOffreComponent },
  { path: 'companie', component: CompanieComponent },
  { path: 'test', component: TestComponent },
  { path: 'dashboard/applicants-per-period', component: ApplicantsPerPeriodComponent },
  { path: 'dashboard/candidates-per-test', component: CandidatesPerTestComponent },
  { path: 'dashboard/success-per-test', component: SuccessPerTestComponent },
  { path: 'dashboard/failure-per-test', component: FailurePerTestComponent },
  { path: 'dashboard/answered_questions-per-test', component: AnsweredQuestionsPerTestComponent },
  { path: 'dashboard/participant-percentage-per-test', component: ParticipantPercentagePerTestComponent },
  { path: 'testdashboard', component: DashbordtestComponent},
  { path: 'dashboard', component: DashboardMainComponent },

/*
const routes: Routes = [
  {path: 'home', component: HomepageComponent},
   {path: 'userProfile', component: UserprofileComponent},
   {path: 'offres', component: AllAppelOffrePageComponent},
   {path:'table', component:TableComponent},
   {path:'nouvelleOffre', component: AppelOffreComponent},
   {path:'companie', component:CompanieComponent},
   {path:'test', component:TestComponent},
   {path:'testdashboard', component:DashbordtestComponent},
   {path:'createtest', component: CreateTestComponent },
   {path:'questiontable', component: QuestionTabComponent},
   {path:'postuler', component: PostulerComponent},
   {path:'offre-detail', component: AppelOffreDetailComponent },
   {path:'sign', component: SignupLoginComponent }
   **/

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
