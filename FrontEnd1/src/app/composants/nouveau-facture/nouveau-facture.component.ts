import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturesService } from 'src/app/services/facture/factures.service';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';
@Component({
  selector: 'app-nouveau-facture',
  templateUrl: './nouveau-facture.component.html',
  styleUrls: ['./nouveau-facture.component.css']
})
export class NouveauFactureComponent implements OnInit {
  factureDT: FactureDTO ={};
  analyseMedicalDTo: AnalyseMedicalDTO={};
  listeAnalyse :Array<AnalyseMedicalDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private annalyseMedicalService :AnnalyseMedicalService,
    private facturesService:FacturesService) { }
  ngOnInit(): void {
    this.annalyseMedicalService.findAllAnalysMedical().subscribe(analy => {
      this.listeAnalyse=analy;
    });
    const idfaturee = this.activatedRouter.snapshot.params.idFacture;
    if (idfaturee) {
      this.facturesService.findFactureById(idfaturee)
      .subscribe(facture => {
        this.factureDT = facture;
        this.analyseMedicalDTo = this.factureDT.analyseMedical ? this.factureDT.analyseMedical: {};
      });
    }
  }
  cancel(): void {
    this.router.navigate(['facture']);
  }
  enregistrerFacture(): void {
    this.factureDT.analyseMedical=this.analyseMedicalDTo
    this.facturesService.enregistrerFacture(this.factureDT).subscribe(res => {
      this.router.navigate(['facture']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}


