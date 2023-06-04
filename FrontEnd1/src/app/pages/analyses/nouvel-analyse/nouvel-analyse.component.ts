import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';
import { TypeAnalyseDTO } from 'src/gs-api/src/models/type-analyse-dto';
import { TypAnalyseService } from 'src/app/typeAnalyse/typ-analyse.service';

@Component({
  selector: 'app-nouvel-analyse',
  templateUrl: './nouvel-analyse.component.html',
  styleUrls: ['./nouvel-analyse.component.css']
})
export class NouvelAnalyseComponent implements OnInit {
  reservationDTo: ReservationDTO ={};
  analyseMedicalDto: AnalyseMedicalDTO={};
  listereservation :Array<ReservationDTO>  = [];
  typeAnalysedTo: TypeAnalyseDTO ={};
  listetypeAnalyse :Array<TypeAnalyseDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( private router:Router,
    private activatedRouter:ActivatedRoute,
    private annalyseMedicalService :AnnalyseMedicalService,
    private reservationnService :ReservationnService,
    private typAnalyseService :TypAnalyseService) { };

  ngOnInit(): void {
    this.reservationnService.findAllReservation().subscribe(reservation => {
      this.listereservation=reservation;
    });
      this.typAnalyseService.findAllTypeAnalyse().subscribe(typeanalyse => {
        this.listetypeAnalyse=typeanalyse;
    });
    const idanalys = this.activatedRouter.snapshot.params.idAnalyse;
    if (idanalys) {
      this.annalyseMedicalService.findAnalysMedicalById(idanalys)
      .subscribe(preleveur => {
        this.analyseMedicalDto = preleveur;
        this.reservationDTo = this.analyseMedicalDto.reservation ? this.analyseMedicalDto.reservation: {};
        this.typeAnalysedTo = this.analyseMedicalDto.typeAnalyse? this.analyseMedicalDto.typeAnalyse: {};
      });
    }
  
}
  cancel(): void {
    this.router.navigate(['analyses']);
  }
  enregistrerAnalyse(): void {
    this.analyseMedicalDto.reservation=this.reservationDTo
    this.analyseMedicalDto.typeAnalyse=this.typeAnalysedTo
    this.annalyseMedicalService.enregistrerAnalysMedical(this.analyseMedicalDto).subscribe(res => {
      this.router.navigate(['analyses']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}
  

