import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauDepartementComponent } from './nouveau-departement.component';

describe('NouveauDepartementComponent', () => {
  let component: NouveauDepartementComponent;
  let fixture: ComponentFixture<NouveauDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
