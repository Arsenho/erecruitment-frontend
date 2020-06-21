import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { PosterModule } from './poster/poster.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from "ngx-cookie-service"
import { TestComponent } from './test/test.component';
import { DashbordtestComponent } from './test/dashbordtest/dashbordtest.component';
import { CreateTestComponent } from './test/create-test/create-test.component';
import { AllTestComponent } from './test/all-test/all-test.component';
import { EvaluationComponent } from './test/evaluation/evaluation.component';
import { QuestionTabComponent } from './test/question-tab/question-tab.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,

    DashbordtestComponent,
    CreateTestComponent,
    AllTestComponent,
    EvaluationComponent,
    QuestionTabComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule,
    AuthentificationModule,
    PosterModule,
    MatIconModule,
    NgxPaginationModule,
    DataTablesModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
