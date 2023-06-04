import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/services/employe/employe.service';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { EmployeDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-employe-detaill',
  templateUrl: './employe-detaill.component.html',
  styleUrls: ['./employe-detaill.component.css']
})
export class EmployeDetaillComponent implements OnInit {

  employeDt: EmployeDTO ={};
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private   employeService :EmployeService,
  ) { }

  ngOnInit(): void {
    const idEmploye = this.activatedRouter.snapshot.params.idEmploye;
    if (idEmploye) {
      this.employeService.findEmployeById(idEmploye)
      .subscribe(employe => {
        this.employeDt = employe;
      });
  }
  console.log(idEmploye);
  }

}

