import { Component, OnInit } from '@angular/core';
import {TypeAnalyseDTO} from "../../../gs-api/src/models/type-analyse-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {TypAnalyseService} from "../../typeAnalyse/typ-analyse.service";
import { LaboDTO } from 'src/gs-api/src/models';
import { LaboService } from 'src/app/services/labo/labo.service';

@Component({
  selector: 'app-nouveau-labo',
  templateUrl: './nouveau-labo.component.html',
  styleUrls: ['./nouveau-labo.component.css']
})
export class NouveauLaboComponent implements OnInit {
  
  [x: string]: any;
  laboDt:LaboDTO ={};
  listeLabo: Array<LaboDTO> =[];
  searchedLabo: LaboDTO = {};
 
  laboErrorMsg='';

  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private  laboservice:LaboService
    ) { }


  ngOnInit(): void {
    
    const idLabo = this.activatedRouter.snapshot.params.idLabo;
    if (idLabo) {
      this.laboservice.findLaboById(idLabo)
      .subscribe(labo => {
        this.laboDt=labo;
      })
    
     
    }
    
  
  }
  

  cancel(): void {
    this.router.navigate(['labo']);
    }

    enregistrerLabo(): void {
      this.laboservice.enregistrerLabo(this.laboDt)
     .subscribe(res => {
      this.router.navigate(['labo']);
     // console.log(">>>>>>"+this.patientDt);
      }, error => {
        this.errorMsg = error.error.errors;
      });
    }

    findAllPatient(): void{
      this.laboservice.findAllLabo()
      .subscribe(labo=>{
        this.listeLabo=labo;
      });
    }
   
}
