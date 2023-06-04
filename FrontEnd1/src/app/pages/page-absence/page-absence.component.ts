import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbsenceDTO } from 'src/gs-api/src/models';
import { AbsenceService } from 'src/app/services/absence/absence.service';


@Component({
  selector: 'app-page-absence',
  templateUrl: './page-absence.component.html',
  styleUrls: ['./page-absence.component.css']
})
export class PageAbsenceComponent implements OnInit {

  listeabsence :Array<AbsenceDTO>  = [];
  errorMsgs = '';
    constructor( 
      private router:Router,
      private absenceService:AbsenceService
    
      ) { }
  
    ngOnInit(): void {
    this.findlisteabsence();
     }
      
      findlisteabsence(): void {
        this.absenceService.findAllAbsence().subscribe(res => {
          this.listeabsence=res;
      })
    }
    
    nouveauAbsence(): void{
      this.router.navigate(['nouveauAbsence']);
    }
    exporteAbsence():void{
      this.router.navigate(['exporteAbsence']);
    }
    
    handleSuppression(event: any): void{
      if (event === 'success') {
        this.findlisteabsence;
      } else {
        this.errorMsgs = event;
      }
    
    }
  
  }
  