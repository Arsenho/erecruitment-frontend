import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPerTestComponent } from './success-per-test.component';

describe('SuccessPerTestComponent', () => {
  let component: SuccessPerTestComponent;
  let fixture: ComponentFixture<SuccessPerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
