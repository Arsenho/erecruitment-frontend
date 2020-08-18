import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredQuestionsPerTestComponent } from './answered-questions-per-test.component';

describe('AnsweredQuestionsPerTestComponent', () => {
  let component: AnsweredQuestionsPerTestComponent;
  let fixture: ComponentFixture<AnsweredQuestionsPerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsweredQuestionsPerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredQuestionsPerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
