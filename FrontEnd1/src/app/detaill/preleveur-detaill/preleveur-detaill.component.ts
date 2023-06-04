import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreleveursService } from 'src/app/services/preleveurrs/preleveurs.service';
import { PreleveurDTO } from 'src/gs-api/src/models/preleveur-dto';

@Component({
  selector: 'app-preleveur-detaill',
  templateUrl: './preleveur-detaill.component.html',
  styleUrls: ['./preleveur-detaill.component.css']
})
export class PreleveurDetaillComponent implements OnInit {
  preleveurDt: PreleveurDTO= {};
  constructor( private router:Router,
    private activatedRouter:ActivatedRoute,
      private preleveurService:PreleveursService) { }

  ngOnInit(): void {
    const idpreleveur = this.activatedRouter.snapshot.params.idPreleveur;
    if (idpreleveur) {
      this.preleveurService.findPreleveurById(idpreleveur)
      .subscribe(preleveur => {
        this.preleveurDt = preleveur;
      });
    }
  }

}
