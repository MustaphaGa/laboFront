import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';

@Component({
  selector: 'app-reservation-detaill',
  templateUrl: './reservation-detaill.component.html',
  styleUrls: ['./reservation-detaill.component.css']
})
export class ReservationDetaillComponent implements OnInit {
  reservationDT: ReservationDTO ={};
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private   reservationnService :ReservationnService,
  ) { }

  ngOnInit(): void {
    const idreserver = this.activatedRouter.snapshot.params.idReservation;
    if (idreserver) {
      this.reservationnService.findReservationById(idreserver)
      .subscribe(reservation => {
        this.reservationDT = reservation;
      });
  }
  }

}
