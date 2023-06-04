import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {LaboDTO} from "../../../gs-api/src/models/labo-dto";
import { ActivatedRoute, Router } from '@angular/router';
import { LaboService } from 'src/app/services/labo/labo.service';

@Component({
  selector: 'app-labo-detaill',
  templateUrl: './labo-detaill.component.html',
  styleUrls: ['./labo-detaill.component.css']
})
export class LaboDetaillComponent implements OnInit {
  @Input()
  labodto: LaboDTO = {};
  @Output()
  suppressionLabo = new EventEmitter();
  constructor(
    private router:Router,
    private laboservice:LaboService
  ) { };

  ngOnInit(): void {
   
  
  
    }
    modifierLabo():void{
      this.router.navigate(['nouveauLabo',this.labodto.idLabo])
    }
    
    detailLabo(): void{
      this.router.navigate(['detailLabo',this.labodto.idLabo]);
      
    }
   
    confirmerEtSupprimerLabo(): void{
      if(this.labodto.idLabo){
       this.laboservice.deleteLabo(this.labodto.idLabo)
        .subscribe(res => {
         this.suppressionLabo.emit('success');
        }, error => {
          this.suppressionLabo.emit(error.error.error);
        });
   }
   }


}