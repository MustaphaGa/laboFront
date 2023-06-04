import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DetailresultatService } from 'src/app/services/resultat/detailresultat.service';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';

@Component({
  selector: 'app-detail-resultat',
  templateUrl: './detail-resultat.component.html',
  styleUrls: ['./detail-resultat.component.css']
})
export class DetailResultatComponent implements OnInit {
  @Input()
  detailResultatDTo: DetailResultatDTO ={};
  @Input()
  patientdto: PatientDTO = {};
@Output()
suppressionResult= new EventEmitter();
  constructor(
    private router:Router,
    private  detailresultatServicee :DetailresultatService,
  ) { }

  ngOnInit(): void {

    
   
    
  }
  modifierResultat():void{
    this.router.navigate(['nouvelResultat',this.detailResultatDTo.idResultat])
  }
  detailResultat():void{
    this.router.navigate(['exportpdf1',this.detailResultatDTo.idResultat]);
    this.router.navigate(['exportpdf',this.patientdto.idPatient]);
    
  }
  
  confirmerEtSupprimerResultat(): void{
    if(this.detailResultatDTo.idResultat){
     this.detailresultatServicee.deleteResult(this.detailResultatDTo.idResultat)
      .subscribe(res => {
       this.suppressionResult.emit('success');
      }, error => {
        this.suppressionResult.emit(error.error.error);
      });
 }
 }


}
