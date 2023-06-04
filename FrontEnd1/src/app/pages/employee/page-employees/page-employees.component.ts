import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeDTO } from 'src/gs-api/src/models';
import { EmployeService } from 'src/app/services/employe/employe.service';


@Component({
  selector: 'app-page-employees',
  templateUrl: './page-employees.component.html',
  styleUrls: ['./page-employees.component.css']
})
export class PageEmployeesComponent implements OnInit {


  listeEmploye :Array<EmployeDTO>  = [];
  errorMsgs = '';
  constructor( 
    private router:Router,
    private employeService: EmployeService) { }

  ngOnInit(): void {
   this.findListeEmploye();
  }

  findListeEmploye(): void {
  this.employeService.findAllEmploye().subscribe(res => {
    this.listeEmploye=res;
  });
}
  nouveauEmploye(): void{
    this.router.navigate(['nouveauEmploye']);
  }
  exporteEmploye(): void{
    this.router.navigate(['exporteEmploye']);
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListeEmploye;
    } else {
      this.errorMsgs = event;
    }
  
  }

}
