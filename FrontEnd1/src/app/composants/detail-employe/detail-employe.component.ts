import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe/employe.service';
import { EmployeDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-employe',
  templateUrl: './detail-employe.component.html',
  styleUrls: ['./detail-employe.component.css']
})
export class DetailEmployeComponent implements OnInit {
  @Input()
  employedto: EmployeDTO ={};
  @Output()
 suppressionEmploye = new EventEmitter();
  
  constructor(
    private router:Router,
    private  employeService :EmployeService,
  ) { }

  ngOnInit(): void {
  }
  modifierEmploye():void{
    this.router.navigate(['nouveauEmploye',this.employedto.idEmploye])
  }
  detailEmploye():void{
    this.router.navigate(['detailEmploye',this.employedto.idEmploye])
  }
  confirmerEtSupprimerEmploye(): void{
    if(this.employedto.idEmploye){
     this.employeService.deleteEmploye(this.employedto.idEmploye)
      .subscribe(res => {
       this.suppressionEmploye.emit('success');
      }, error => {
        this.suppressionEmploye.emit(error.error.error);
      });
 }
 }

}

