import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsenceService } from 'src/app/services/absence/absence.service';
import { AbsenceDTO } from 'src/gs-api/src/models';
@Component({
  selector: 'app-detail-absence',
  templateUrl: './detail-absence.component.html',
  styleUrls: ['./detail-absence.component.css']
})
export class DetailAbsenceComponent implements OnInit {

  absenceDt: AbsenceDTO = {};
  constructor(private router:Router,
    private absenceService:AbsenceService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const idAbsence = this.activatedRouter.snapshot.params.idAbsence;
    if (idAbsence) {
      this.absenceService.findAbsenceById(idAbsence)
      .subscribe(absence => {
        this.absenceDt = absence;
      });
    }
    console.log(idAbsence);
    
   
    }

}
