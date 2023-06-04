
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent implements OnInit {
  @Input()
  reservationDT: ReservationDTO ={};
  @Output()
 suppressionReservation = new EventEmitter();
  
  constructor(
    private router:Router,
    private   reservationnService :ReservationnService,
  ) { }

  ngOnInit(): void {
  }
  modifierReservation():void{
    this.router.navigate(['nouveauReservation',this.reservationDT.idReservation])
  }
  detailReservation():void{
    this.router.navigate(['detailReservation',this.reservationDT.idReservation])
  }
  confirmerEtSupprimerReservation(): void{
    if(this.reservationDT.idReservation){
     this.reservationnService.deleteReservation(this.reservationDT.idReservation)
      .subscribe(res => {
       this.suppressionReservation.emit('success');
      }, error => {
        this.suppressionReservation.emit(error.error.error);
      });
 }
 }

}
