import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceDetaillComponent } from './absence-detaill.component';

describe('AbsenceDetaillComponent', () => {
  let component: AbsenceDetaillComponent;
  let fixture: ComponentFixture<AbsenceDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
