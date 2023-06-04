import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetaillComponent } from './patient-detaill.component';

describe('PatientDetaillComponent', () => {
  let component: PatientDetaillComponent;
  let fixture: ComponentFixture<PatientDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
