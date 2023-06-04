
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PreleveursService } from 'src/app/services/preleveurrs/preleveurs.service';
import { PreleveurDTO } from 'src/gs-api/src/models/preleveur-dto';

@Component({
  selector: 'app-detail-preleveur',
  templateUrl: './detail-preleveur.component.html',
  styleUrls: ['./detail-preleveur.component.css']
})
export class DetailPreleveurComponent implements OnInit {
  @Input()
  preleveurDto: PreleveurDTO= {};
  @Output()
  suppressionPreleveur = new EventEmitter();
 
  constructor( private router:Router,
    private preleveurService:PreleveursService)  { };

  ngOnInit(): void {
  }
  modifierPreleveur():void{
    this.router.navigate(['nouveauPreleveurs',this.preleveurDto.idPreleveur])
  }
  detailPreleveur():void{
    this.router.navigate(['detailPreleveurs',this.preleveurDto.idPreleveur])
  }
  confirmerEtSupprimerPreleveur(){
    if(this.preleveurDto.idPreleveur){
      this.preleveurService.deletePreleveur(this.preleveurDto.idPreleveur)
       .subscribe(res => {
        this.suppressionPreleveur.emit('success');
       }, error => {
         this.suppressionPreleveur.emit(error.error.error);
       });
  }
  }

}
