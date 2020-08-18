import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPercentagePerTestComponent } from './participant-percentage-per-test.component';

describe('ParticipantPercentagePerTestComponent', () => {
  let component: ParticipantPercentagePerTestComponent;
  let fixture: ComponentFixture<ParticipantPercentagePerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantPercentagePerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantPercentagePerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
