import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';

@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css']
})
export class PageReservationComponent implements OnInit {
  listeResevation :Array<ReservationDTO>  = [];
  errorMsgs = '';
  constructor( 
    private router:Router,
    private reservationnService:ReservationnService) { }

  ngOnInit(): void {
   this.findListreservation();
  }

findListreservation(): void {
  this.reservationnService.findAllReservation().subscribe(res => {
    this.listeResevation=res;
  });
}
  nouveauReservation(): void{
    this.router.navigate(['nouveauReservation']);
  }
  exporteReservation(): void{
    this.router.navigate(['exporteReservation']);
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListreservation;
    } else {
      this.errorMsgs = event;
    }
  
  }

}
