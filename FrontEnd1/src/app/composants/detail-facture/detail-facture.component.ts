import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FacturesService } from 'src/app/services/facture/factures.service';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {
  @Input()
  factureDTo: FactureDTO ={};
  @Output()
  suppressionFacture = new EventEmitter();
  constructor(
    private router:Router,
    private  facturesService:FacturesService,
  ) { }

  ngOnInit(): void {
  }
  modifierfacture():void{
    this.router.navigate(['nouvelfacture',this.factureDTo.idFacture])
  }
  detailfacture():void{
    this.router.navigate(['detailfacture',this.factureDTo.idFacture])
  }
  confirmerEtSupprimerFacture(): void{
    if(this.factureDTo.idFacture){
     this.facturesService.deleteFacture(this.factureDTo.idFacture)
      .subscribe(res => {
       this.suppressionFacture.emit('success');
      }, error => {
        this.suppressionFacture.emit(error.error.error);
      });
 }
 }
}
