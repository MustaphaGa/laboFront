import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';
@Component({
  selector: 'app-nouveau-reservation',
  templateUrl: './nouveau-reservation.component.html',
  styleUrls: ['./nouveau-reservation.component.css']
})
export class NouveauReservationComponent implements OnInit {
  reservationDTo: ReservationDTO ={};
  patientDt: PatientDTO={};
  listepatient :Array<PatientDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private reservationnService :ReservationnService,
    private patientService:PatientService) { }


  ngOnInit(): void {
    this.patientService.findAllPatient().subscribe(patient => {
      this.listepatient=patient;
    });
    const idreservation = this.activatedRouter.snapshot.params.idReservation;
    if (idreservation) {
      this.reservationnService.findReservationById(idreservation)
      .subscribe(reservation => {
        this.reservationDTo = reservation;
        this.patientDt = this.reservationDTo.patient ? this.reservationDTo.patient: {};
      });
    }
  
  }
  cancel(): void {
    this.router.navigate(['reservation']);
  }
  enregistrerReservation(): void {
    this.reservationDTo.patient=this.patientDt
    this.reservationnService.enregistrerReservation(this.reservationDTo).subscribe(res => {
      this.router.navigate(['reservation']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}
