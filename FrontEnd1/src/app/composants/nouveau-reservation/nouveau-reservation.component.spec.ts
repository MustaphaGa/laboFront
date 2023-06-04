import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauReservationComponent } from './nouveau-reservation.component';

describe('NouveauReservationComponent', () => {
  let component: NouveauReservationComponent;
  let fixture: ComponentFixture<NouveauReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
