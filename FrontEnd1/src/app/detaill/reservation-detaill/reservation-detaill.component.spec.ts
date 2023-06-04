import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDetaillComponent } from './reservation-detaill.component';

describe('ReservationDetaillComponent', () => {
  let component: ReservationDetaillComponent;
  let fixture: ComponentFixture<ReservationDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
