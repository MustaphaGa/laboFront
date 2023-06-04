import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDTO } from '../../../gs-api/src/models/patient-dto';
import {PatientService } from 'src/app/services/patient/patient.service';


@Component({
  selector: 'app-nouveau-patient',
  templateUrl: './nouveau-patient.component.html',
  styleUrls: ['./nouveau-patient.component.css']
})
export class NouveauPatientComponent implements OnInit {
  [x: string]: any;
  patientDt: PatientDTO={};
  listPatients: Array<PatientDTO> =[];
  searchedPatien: PatientDTO = {};
  errorMsg: Array<string> = [];
  patientErrorMsg='';
  codePatient ='';
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private  patientService:PatientService
    ) { }

  ngOnInit(): void {

    const idpatients = this.activatedRouter.snapshot.params.idPatient;
    if (idpatients) {
      this.patientService.findPatientById(idpatients)
      .subscribe(patient => {
        this.patientDt = patient;
      });
    }
    this.findAllPatient();
  
  }
  

  cancel(): void {
    this.router.navigate(['patients']);
  }
  enregistrerPatient(): void {
    this.patientService.enregistrerpatient(this.patientDt).subscribe(res => {
    this.router.navigate(['patients']);
   // console.log(">>>>>>"+this.patientDt);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
  findAllPatient(): void{
    this.patientService.findAllPatient().subscribe(patrient=>{
      this.listPatients=patrient;
    });

  }
  findPatientByCode(codePatient: string): void{
    if(codePatient){
      this.patientService.findPatientByCode(codePatient).subscribe(patient=>{
        this.searchedPatien=patient;
      },error=>{
        this.errorMsg = error,error.message;
        
      
      });
    }

  }
  searchPatient(): void{
    this.findPatientByCode(this.codePatient);
  }

}
