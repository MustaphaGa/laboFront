import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeepartementService } from 'src/app/services/departemments/deepartement.service';
import { DepartementDTO } from 'src/gs-api/src/models/departement-dto';

@Component({
  selector: 'app-nouveau-departement',
  templateUrl: './nouveau-departement.component.html',
  styleUrls: ['./nouveau-departement.component.css']
})
export class NouveauDepartementComponent implements OnInit {
  [x: string]: any;
  departementdto: DepartementDTO={};
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private departementService:DeepartementService
  ) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['departement']);
  }
  enregistrerDepartement(): void {
    this.departementService.enregistrerdepartement(this.departementdto).subscribe(res => {
      this.router.navigate(['departement']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

}
