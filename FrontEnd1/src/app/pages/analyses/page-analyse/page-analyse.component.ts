import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';

@Component({
  selector: 'app-page-analyse',
  templateUrl: './page-analyse.component.html',
  styleUrls: ['./page-analyse.component.css']
})
export class PageAnalyseComponent implements OnInit {
 listeAnalyse :Array<AnalyseMedicalDTO>  = [];
 errorMsgs = '';
  constructor( private router:Router,
    private annalyseMedicalService :AnnalyseMedicalService) { }

  ngOnInit(): void {
   this.findListAnalyse();
  }
  findListAnalyse():void{
    this.annalyseMedicalService.findAllAnalysMedical().subscribe(res => {
      this.listeAnalyse=res;
  
})
  }
  nouvelanalyse():void{
    this.router.navigate(['nouvelanalyse']);

  }
  exporteanalyse():void{
    this.router.navigate(['exporteAnalyse']);

  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListAnalyse;
    } else {
      this.errorMsgs = event;
    }
  
  }

}
