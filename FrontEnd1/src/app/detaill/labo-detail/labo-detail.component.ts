import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboService } from 'src/app/services/labo/labo.service';
import { LaboDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-labo-detail',
  templateUrl: './labo-detail.component.html',
  styleUrls: ['./labo-detail.component.css']
})
export class LaboDetailComponent implements OnInit {


  laboDt: LaboDTO = {};
  constructor(private router:Router,
    private laboservice:LaboService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const idLabo = this.activatedRouter.snapshot.params.idLabo;
    if (idLabo) {
      this.laboservice.findLaboById(idLabo)
      .subscribe(labo => {
        this.laboDt = labo;
      });
    }
    console.log(idLabo);
    
   
    }
    

}
