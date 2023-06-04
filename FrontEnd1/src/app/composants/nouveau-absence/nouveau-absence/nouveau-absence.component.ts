import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbsenceService } from 'src/app/services/absence/absence.service';
import { EmployeService } from 'src/app/services/employe/employe.service';
import { AbsenceDTO, EmployeDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouveau-absence',
  templateUrl: './nouveau-absence.component.html',
  styleUrls: ['./nouveau-absence.component.css']
})
export class NouveauAbsenceComponent implements OnInit {
  [x: string]: any;
  absenceDt: AbsenceDTO={};
  employeDto:EmployeDTO={};
  listabsences: Array<AbsenceDTO> =[];
  listemploye: Array<EmployeDTO> =[];
 
  errorMsg: Array<string> = [];
  patientErrorMsg='';

  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private  absenceService:AbsenceService,
    private employeService:EmployeService
    ) { }

  ngOnInit(): void {
    this.employeService.findAllEmploye().subscribe(employe => {
      this.listemploye=employe;
    });

    const idAbsence = this.activatedRouter.snapshot.params.idAbsence;
    if (idAbsence) {
      this.absenceService.findAbsenceById(idAbsence)
      .subscribe(absence => {
        this.absenceDt = absence;
        this.employeDto = this.absenceDt.employe ? this.absenceDt.employe: {};

      });
    }
  
  
  }
  

  cancel(): void {
    this.router.navigate(['absence']);
  }
  enregistrerAbsence(): void {
    this.absenceDt.employe=this.employeDto

    this.absenceService.enregistrerabsence(this.absenceDt)
    .subscribe(res => {
    this.router.navigate(['absence']);
   // console.log(">>>>>>"+this.patientDt);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
 
 

}
