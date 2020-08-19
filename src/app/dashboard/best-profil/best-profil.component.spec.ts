import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProfilComponent } from './best-profil.component';

describe('BestProfilComponent', () => {
  let component: BestProfilComponent;
  let fixture: ComponentFixture<BestProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
