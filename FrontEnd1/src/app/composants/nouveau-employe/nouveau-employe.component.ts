import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe/employe.service';
import { LaboService } from 'src/app/services/labo/labo.service';
import { EmployeDTO, LaboDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouveau-employe',
  templateUrl: './nouveau-employe.component.html',
  styleUrls: ['./nouveau-employe.component.css']
})
export class NouveauEmployeComponent implements OnInit {
  
  employeDto: EmployeDTO ={};
  laboDto: LaboDTO={};
  listeEmploye :Array<EmployeDTO>=[];
  listeLabo :Array<LaboDTO>  = [];
  errorMsg: Array<string> = [];
  constructor( 
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private employeService :EmployeService,
    private laboService:LaboService) { }


  ngOnInit(): void {
  this.laboService.findAllLabo().subscribe(labo => {
      this.listeLabo=labo;
    });
    const idEmploye = this.activatedRouter.snapshot.params.idEmploye;
    if (idEmploye) {
      this.employeService.findEmployeById(idEmploye)
      .subscribe(employe => {
        this.employeDto = employe;
        this.laboDto = this.employeDto.labo ? this.employeDto.labo: {};
      });
    }

  
  }
  cancel(): void {
    this.router.navigate(['employe']);
  }
  enregistrerEmploye(): void {
    this.employeDto.labo=this.laboDto
    this.employeService.enregistrerEmploye(this.employeDto)
    .subscribe(res => {
      this.router.navigate(['employe']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
 
}
