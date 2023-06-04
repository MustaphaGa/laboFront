import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailresultatService } from 'src/app/services/resultat/detailresultat.service';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';
import { PatientService } from 'src/app/services/patient/patient.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-resultat-detaill',
  templateUrl: './resultat-detaill.component.html',
  styleUrls: ['./resultat-detaill.component.css']
})
export class ResultatDetaillComponent implements OnInit {

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
 
      
