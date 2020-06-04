import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppelOffrePageComponent } from './all-appel-offre-page.component';

describe('AllAppelOffrePageComponent', () => {
  let component: AllAppelOffrePageComponent;
  let fixture: ComponentFixture<AllAppelOffrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAppelOffrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppelOffrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
