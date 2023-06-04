import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';

@Component({
  selector: 'app-patient-detaill',
  templateUrl: './patient-detaill.component.html',
  styleUrls: ['./patient-detaill.component.css']
})
export class PatientDetaillComponent implements OnInit {
 
  patientDt: PatientDTO = {};
  constructor(private router:Router,
    private patientService:PatientService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const idpatient = this.activatedRouter.snapshot.params.idPatient;
    if (idpatient) {
      this.patientService.findPatientById(idpatient)
      .subscribe(patient => {
        this.patientDt = patient;
      });
    }
    console.log(idpatient);
    
   
    }
    
}



