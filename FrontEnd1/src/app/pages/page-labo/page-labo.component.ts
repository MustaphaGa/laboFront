import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LaboService} from "../../services/labo/labo.service";
import { LaboDTO } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-labo',
  templateUrl: './page-labo.component.html',
  styleUrls: ['./page-labo.component.css']
})
export class PageLaboComponent implements OnInit {
   listeLabo : Array<LaboDTO>  = [];
  errorMsgs = '';
  constructor(
    private router: Router,
    private laboService: LaboService,
  ) { }

  ngOnInit(): void {
    this.findlisteLabo();
    }
    findlisteLabo(): void {
      this.laboService.findAllLabo()
      .subscribe(res => {
        this.listeLabo=res;
    })
  }

  nouveauLabo() : void{
    this.router.navigate(['nouveauLabo']);
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findlisteLabo;
    } else {
      this.errorMsgs = event;
    }
  
  }
  
}
