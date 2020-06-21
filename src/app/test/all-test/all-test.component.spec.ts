import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestComponent } from './all-test.component';

describe('AllTestComponent', () => {
  let component: AllTestComponent;
  let fixture: ComponentFixture<AllTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
