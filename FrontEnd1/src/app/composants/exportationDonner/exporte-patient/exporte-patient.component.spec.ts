import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportePatientComponent } from './exporte-patient.component';

describe('ExportePatientComponent', () => {
  let component: ExportePatientComponent;
  let fixture: ComponentFixture<ExportePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
