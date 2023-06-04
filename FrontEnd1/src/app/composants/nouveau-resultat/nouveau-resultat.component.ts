import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { DetailresultatService } from 'src/app/services/resultat/detailresultat.service';
import { BiologisteeService } from 'src/app/services/biologiste/biologistee.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';

@Component({
  selector: 'app-nouveau-resultat',
  templateUrl: './nouveau-resultat.component.html',
  styleUrls: ['./nouveau-resultat.component.css']
})
export class NouveauResultatComponent implements OnInit {
  detailResultatDTO: DetailResultatDTO ={};
  biologisteDTo: BiologisteDTO ={};
  analyseMedicalDto: AnalyseMedicalDTO={};
  listeBiologist :Array<BiologisteDTO> = [];
  listeAnalyse :Array<AnalyseMedicalDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( private router:Router,
    private activatedRouter:ActivatedRoute,
    private annalyseMedicalService :AnnalyseMedicalService,
    private biologisteeService :BiologisteeService,
    private detailresultatService :DetailresultatService)
     { };

  ngOnInit(): void {
    this.annalyseMedicalService.findAllAnalysMedical().subscribe(analys => {
      this.listeAnalyse=analys;
    });
      this.biologisteeService.findAllBiologiste().subscribe(biologist => {
        this.listeBiologist=biologist;
    });
    const idresult = this.activatedRouter.snapshot.params.idResultat;
    if (idresult) {
      this.detailresultatService.findDetailResulatById(idresult)
      .subscribe(result => {
        this.detailResultatDTO = result;
        this.analyseMedicalDto = this.detailResultatDTO.analyseMedical ? this.detailResultatDTO.analyseMedical: {};
        this.biologisteDTo = this.detailResultatDTO.biologiste ? this.detailResultatDTO.biologiste: {};
      });
    }
  
}
  cancel(): void {
    this.router.navigate(['detailresultat']);
  }
  enregistrerAnalyse(): void {
    this.detailResultatDTO.analyseMedical=this.analyseMedicalDto
    this.detailResultatDTO.biologiste=this.biologisteDTo
    this.detailresultatService.enregistrerDetaillResultat(this.detailResultatDTO).subscribe(res => {
      this.router.navigate(['detailresultat']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}
