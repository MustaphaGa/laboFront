import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';

@Component({
  selector: 'app-analyse-detaill',
  templateUrl: './analyse-detaill.component.html',
  styleUrls: ['./analyse-detaill.component.css']
})
export class AnalyseDetaillComponent implements OnInit {
  analyseMedicalDto: AnalyseMedicalDTO={};
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private annalyseMedicalService :AnnalyseMedicalService,
  ) { }

  ngOnInit(): void {
    const idanalys = this.activatedRouter.snapshot.params.idAnalyse;
    if (idanalys) {
      this.annalyseMedicalService.findAnalysMedicalById(idanalys)
      .subscribe(patient => {
        this.analyseMedicalDto = patient;
      });
    }
   
  }

}
