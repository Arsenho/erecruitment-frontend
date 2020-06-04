import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelOffreDetailComponent } from './appel-offre-detail.component';

describe('AppelOffreDetailComponent', () => {
  let component: AppelOffreDetailComponent;
  let fixture: ComponentFixture<AppelOffreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelOffreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelOffreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
