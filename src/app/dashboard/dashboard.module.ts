import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ApplicantsPerPeriodComponent } from './applicants-per-period/applicants-per-period.component';

import { ChartsModule } from 'ng2-charts';
import { CandidatesPerTestComponent } from './candidates-per-test/candidates-per-test.component';
import { SuccessPerTestComponent } from './success-per-test/success-per-test.component';
import { FailurePerTestComponent } from './failure-per-test/failure-per-test.component';
import { AnsweredQuestionsPerTestComponent } from './answered-questions-per-test/answered-questions-per-test.component';
import { ParticipantPercentagePerTestComponent } from './participant-percentage-per-test/participant-percentage-per-test.component';

@NgModule({
  declarations: [
    ApplicantsPerPeriodComponent,
    CandidatesPerTestComponent,
    SuccessPerTestComponent,
    FailurePerTestComponent,
    AnsweredQuestionsPerTestComponent,
    ParticipantPercentagePerTestComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule],
  exports: [
    ApplicantsPerPeriodComponent,
    CandidatesPerTestComponent,
    SuccessPerTestComponent,
    FailurePerTestComponent,
    AnsweredQuestionsPerTestComponent,
    ParticipantPercentagePerTestComponent,
  ],
})
export class DashboardModule {}
