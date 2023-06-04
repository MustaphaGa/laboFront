import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypAnalyseService } from 'src/app/typeAnalyse/typ-analyse.service';
import { TypeAnalyseDTO } from 'src/gs-api/src/models/type-analyse-dto';

@Component({
  selector: 'app-nouveau-type-analyse',
  templateUrl: './nouveau-type-analyse.component.html',
  styleUrls: ['./nouveau-type-analyse.component.css']
})
export class NouveauTypeAnalyseComponent implements OnInit {
  [x: string]: any;
  typeAnalysedTo: TypeAnalyseDTO ={};
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private typAnalyseService :TypAnalyseService
  ) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['TypeAnalyse']);
  }
  enregistrerTypeAnalyse(): void {
    this.typAnalyseService.enregistrerTypeAnalyse(this.typeAnalysedTo).subscribe(res => {
      this.router.navigate(['TypeAnalyse']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

}


