import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesPerTestComponent } from './candidates-per-test.component';

describe('CandidatesPerTestComponent', () => {
  let component: CandidatesPerTestComponent;
  let fixture: ComponentFixture<CandidatesPerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesPerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesPerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
