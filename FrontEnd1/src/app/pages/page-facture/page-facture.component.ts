import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturesService } from 'src/app/services/facture/factures.service';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';

@Component({
  selector: 'app-page-facture',
  templateUrl: './page-facture.component.html',
  styleUrls: ['./page-facture.component.css']
})
export class PageFactureComponent implements OnInit {
  listefacture :Array<FactureDTO>  = [];
  errorMsgs = '';
  constructor( 
    private router:Router,
    private facturesService:FacturesService) { }

  ngOnInit(): void {
    this.findListFacture();
  }
  findListFacture():void{
    this.facturesService.findAllFacture().subscribe(res => {
      this.listefacture=res;
      
})
  }
  nouveauFacture(): void{
    this.router.navigate(['nouvelfacture']);
  }
  exporteFacture(): void{
    this.router.navigate(['exportfacture']);
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListFacture;
    } else {
      this.errorMsgs = event;
    }
  
  }

}

