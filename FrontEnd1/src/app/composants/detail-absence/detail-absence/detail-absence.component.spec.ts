import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAbsenceComponent } from './detail-absence.component';

describe('DetailAbsenceComponent', () => {
  let component: DetailAbsenceComponent;
  let fixture: ComponentFixture<DetailAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
