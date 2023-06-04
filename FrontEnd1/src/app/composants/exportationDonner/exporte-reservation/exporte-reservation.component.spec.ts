import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporteReservationComponent } from './exporte-reservation.component';

describe('ExporteReservationComponent', () => {
  let component: ExporteReservationComponent;
  let fixture: ComponentFixture<ExporteReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporteReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporteReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
