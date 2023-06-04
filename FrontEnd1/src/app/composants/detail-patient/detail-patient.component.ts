import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {
  @Input()
  patientdto: PatientDTO = {};
  @Output()
  suppressionPatient = new EventEmitter();
  constructor(
    private router:Router,
    private patientService:PatientService
  ) { };

  ngOnInit(): void {
   
  
  
    }
    modifierPatient():void{
      this.router.navigate(['nouveauPatient',this.patientdto.idPatient])
    }
    
    detaillresultat(): void{
      this.router.navigate(['detailPatient',this.patientdto.idPatient]);
      
    }
   
    confirmerEtSupprimerPatient(): void{
      if(this.patientdto.idPatient){
       this.patientService.deletePatient(this.patientdto.idPatient)
        .subscribe(res => {
         this.suppressionPatient.emit('success');
        }, error => {
          this.suppressionPatient.emit(error.error.error);
        });
   }
   }
  
  }

