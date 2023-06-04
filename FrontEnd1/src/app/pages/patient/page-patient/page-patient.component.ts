import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';

@Component({
  selector: 'app-page-patient',
  templateUrl: './page-patient.component.html',
  styleUrls: ['./page-patient.component.css']
})
export class PagePatientComponent implements OnInit {
listepatient :Array<PatientDTO>  = [];
errorMsgs = '';
  constructor( 
    private router:Router,
    private patientService:PatientService
  
    ) { }

  ngOnInit(): void {
  this.findListpatient();
   }
    
    findListpatient(): void {
      this.patientService.findAllPatient().subscribe(res => {
        this.listepatient=res;
    })
  }
  
  nouveauPatient(): void{
    this.router.navigate(['nouveauPatient']);
  }
  exportePatient():void{
    this.router.navigate(['exportePatient']);
  }
  
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListpatient;
    } else {
      this.errorMsgs = event;
    }
  
  }

}
