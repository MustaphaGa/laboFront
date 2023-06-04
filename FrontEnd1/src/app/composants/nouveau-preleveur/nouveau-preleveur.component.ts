import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreleveurDTO } from 'src/gs-api/src/models/preleveur-dto';
import { PreleveursService } from 'src/app/services/preleveurrs/preleveurs.service';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';

@Component({
  selector: 'app-nouveau-preleveur',
  templateUrl: './nouveau-preleveur.component.html',
  styleUrls: ['./nouveau-preleveur.component.css']
})
export class NouveauPreleveurComponent implements OnInit {
  preleveurDto: PreleveurDTO={};
  analyseMedicalDt: AnalyseMedicalDTO={};
  listeAnalyse :Array<AnalyseMedicalDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private preleveurService:PreleveursService,
    private annalyseMedicalService :AnnalyseMedicalService) { }

  ngOnInit(): void {
   //console.log(this.analyseMedicalDt);
    
    this.annalyseMedicalService.findAllAnalysMedical().subscribe(analysMedical => {
      this.listeAnalyse=analysMedical;
    });
    const idprelev = this.activatedRouter.snapshot.params.idPreleveur;
    if (idprelev) {
      this.preleveurService.findPreleveurById(idprelev)
      .subscribe(preleveur => {
        this.preleveurDto = preleveur;
        this.analyseMedicalDt = this.preleveurDto.analyseMedical ? this.preleveurDto.analyseMedical: {};
      });
    }
  }
  cancel(): void {
    this.router.navigate(['preleveurs']);
  }
  enregistrerPreleveur(): void {
    this.preleveurDto.analyseMedical=this.analyseMedicalDt
    this.preleveurService.enregistrerPreleveur(this.preleveurDto).subscribe(res => {
    this.router.navigate(['preleveurs']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}
