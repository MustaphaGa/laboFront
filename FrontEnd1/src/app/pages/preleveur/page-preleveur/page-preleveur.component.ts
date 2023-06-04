import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreleveurDTO } from 'src/gs-api/src/models/preleveur-dto';
import { PreleveursService } from 'src/app/services/preleveurrs/preleveurs.service';

@Component({
  selector: 'app-page-preleveur',
  templateUrl: './page-preleveur.component.html',
  styleUrls: ['./page-preleveur.component.css']
})
export class PagePreleveurComponent implements OnInit {
  listePreleveur :Array<PreleveurDTO>  = [];
  errorMsgs = '';
  constructor(
    private router:Router,
    private preleveurService:PreleveursService) { }

  ngOnInit(): void {
    this.findListPreleveur();
    }
      findListPreleveur(): void {
        this.preleveurService.findAllPreleveur().subscribe(res => {
          this.listePreleveur=res;
        });
  }
  nouveauPreleveur(): void{
    this.router.navigate(['nouveauPreleveurs'])
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListPreleveur;
    } else {
      this.errorMsgs = event;
    }
  
  }


}
