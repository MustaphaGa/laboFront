import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BiologisteeService } from 'src/app/services/biologiste/biologistee.service';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';

@Component({
  selector: 'app-biologiste-detaill',
  templateUrl: './biologiste-detaill.component.html',
  styleUrls: ['./biologiste-detaill.component.css']
})
export class BiologisteDetaillComponent implements OnInit {
  biologisteDet: BiologisteDTO ={};
  constructor(private router:Router,
    private BiologisteeService :BiologisteeService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const idbilogist = this.activatedRouter.snapshot.params.idBiologiste
    if (idbilogist) {
      this.BiologisteeService.findBiologistById(idbilogist)
      .subscribe(bilogist => {
        this.biologisteDet = bilogist;
      });
    }
   
    
  }

}
