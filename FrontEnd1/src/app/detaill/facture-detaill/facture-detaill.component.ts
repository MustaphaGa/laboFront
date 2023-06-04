import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturesService } from 'src/app/services/facture/factures.service';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';

@Component({
  selector: 'app-facture-detaill',
  templateUrl: './facture-detaill.component.html',
  styleUrls: ['./facture-detaill.component.css']
})
export class FactureDetaillComponent implements OnInit {
  factureDT: FactureDTO ={};
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private  facturesService:FacturesService,
  ) { }

  ngOnInit(): void {
    const idfactur = this.activatedRouter.snapshot.params.idFacture;
    if (idfactur) {
      this.facturesService.findFactureById(idfactur)
      .subscribe(facture => {
        this.factureDT = facture;
      });
  }
  }
  }
