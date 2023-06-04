import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauAbsenceComponent } from './nouveau-absence.component';

describe('NouveauAbsenceComponent', () => {
  let component: NouveauAbsenceComponent;
  let fixture: ComponentFixture<NouveauAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
