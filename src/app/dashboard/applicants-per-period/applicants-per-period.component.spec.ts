import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsPerPeriodComponent } from './applicants-per-period.component';

describe('ApplicantsPerPeriodComponent', () => {
  let component: ApplicantsPerPeriodComponent;
  let fixture: ComponentFixture<ApplicantsPerPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsPerPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsPerPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
