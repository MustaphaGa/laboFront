import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeepartementService } from 'src/app/services/departemments/deepartement.service';
import { DepartementDTO } from 'src/gs-api/src/models/departement-dto';

@Component({
  selector: 'app-page-departement',
  templateUrl: './page-departement.component.html',
  styleUrls: ['./page-departement.component.css']
})
export class PageDepartementComponent implements OnInit {
  listeDepartement :Array<DepartementDTO>  = [];
  errorMsgs = '';
  constructor(
    private router:Router,
    private departementService:DeepartementService
  ) { }

  ngOnInit(): void {
    this.departementService.findAllDepartement().subscribe(res => {
      this.listeDepartement =res;


    })
  }
  nouveauDepartement(): void{
    this.router.navigate(['nouveauDepartement']);
  }
}
