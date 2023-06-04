import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';
import { ReservationService } from 'src/gs-api/src/services/reservation.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationnService {

  constructor( private reservationService :ReservationService
    ) { };
    enregistrerReservation(reservationDT:ReservationDTO):Observable<ReservationDTO> {
      return this.reservationService.save(reservationDT);
      
    }
    findAllReservation(): Observable<ReservationDTO[]> {
      return this.reservationService.findAll();
    }
    findReservationById(idReservation?: number): Observable<ReservationDTO> {
      if (idReservation) {
        return this.reservationService.findById(idReservation);
      }
      return of();
    }
    deleteReservation(idReservation?: number):Observable<any>{
      if (idReservation) {
        return this.reservationService.delete(idReservation);
      }
      return of();
    }
    }
    

