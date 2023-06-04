
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeAnalyseDTO } from 'src/gs-api/src/models/type-analyse-dto';
import { TypAnalyseService } from 'src/app/typeAnalyse/typ-analyse.service';
@Component({
  selector: 'app-page-type-analyse',
  templateUrl: './page-type-analyse.component.html',
  styleUrls: ['./page-type-analyse.component.css']
})
export class PageTypeAnalyseComponent implements OnInit {

  listeTypeAnalyse :Array<TypeAnalyseDTO>  = [];
  errorMsgs = '';
  constructor(
    private router:Router,
    private typAnalyseService :TypAnalyseService
  ) { }

  ngOnInit(): void {
    this.typAnalyseService.findAllTypeAnalyse().subscribe(res => {
      this.listeTypeAnalyse=res;

    })
  }
  nouveauTypeAnalyse(): void{
    this.router.navigate(['nouveauTypeAnalyse']);
  }
}

