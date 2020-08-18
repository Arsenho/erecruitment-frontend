import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailurePerTestComponent } from './failure-per-test.component';

describe('FailurePerTestComponent', () => {
  let component: FailurePerTestComponent;
  let fixture: ComponentFixture<FailurePerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailurePerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailurePerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
