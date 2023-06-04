import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';

@Component({
  selector: 'app-detail-analyse',
  templateUrl: './detail-analyse.component.html',
  styleUrls: ['./detail-analyse.component.css']
})
export class DetailAnalyseComponent implements OnInit {
  @Input()
  analyseMedicalDtto: AnalyseMedicalDTO={};
  @Output()
  suppressionAnalyse = new EventEmitter();
  constructor(
    private router:Router,
    private annalyseMedicalService :AnnalyseMedicalService,
  ) { }

  ngOnInit(): void {
  }
  modifierAnalyse():void{
    this.router.navigate(['nouvelanalyse',this.analyseMedicalDtto.idAnalyse])
  }
  detailAnalyse():void{
    this.router.navigate(['detailanalyse',this.analyseMedicalDtto.idAnalyse])
  }
  confirmerEtSupprimerAnalyse(): void{
    if(this.analyseMedicalDtto.idAnalyse){
      this.annalyseMedicalService.deleteAnalyse(this.analyseMedicalDtto.idAnalyse)
       .subscribe(res => {
        this.suppressionAnalyse.emit('success');
       }, error => {
         this.suppressionAnalyse.emit(error.error.error);
       });
  }
  
  }

}
