import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementDTO } from 'src/gs-api/src/models/departement-dto';
import { BiologisteeService } from 'src/app/services/biologiste/biologistee.service';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';
import { DeepartementService } from 'src/app/services/departemments/deepartement.service';
@Component({
  selector: 'app-nouveau-biologiste',
  templateUrl: './nouveau-biologiste.component.html',
  styleUrls: ['./nouveau-biologiste.component.css']
})
export class NouveauBiologisteComponent implements OnInit {
  biologisteDto: BiologisteDTO ={};
  departementDT: DepartementDTO={};
  listeDepartement :Array<DepartementDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private BiologisteeService :BiologisteeService,
    private departementService:DeepartementService) { }

  ngOnInit(): void {
    this.departementService.findAllDepartement().subscribe(departement => {
      this.listeDepartement=departement;
    });
    const idbilologist = this.activatedRouter.snapshot.params.idBiologiste;
    if (idbilologist) {
      this.BiologisteeService.findBiologistById(idbilologist)
      .subscribe(biologist => {
        this.biologisteDto = biologist;
        this.departementDT = this.biologisteDto.departement ? this.biologisteDto.departement: {};
      });
    }
  }
  cancel(): void {
    this.router.navigate(['biologiste']);
  }
  enregistrerBiologistee(): void {
    this.biologisteDto.departement=this.departementDT
    this.BiologisteeService.enregistrerBiologiste(this.biologisteDto).subscribe(res => {
      this.router.navigate(['biologiste']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}

