import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordtestComponent } from './dashbordtest.component';

describe('DashbordtestComponent', () => {
  let component: DashbordtestComponent;
  let fixture: ComponentFixture<DashbordtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
