import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailresultatService } from 'src/app/services/resultat/detailresultat.service';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';

@Component({
  selector: 'app-page-resultat',
  templateUrl: './page-resultat.component.html',
  styleUrls: ['./page-resultat.component.css']
})
export class PageResultatComponent implements OnInit {

  listeResult :Array<DetailResultatDTO>  = [];
  errorMsgs = '';
   constructor( private router:Router,
    private detailresultatService :DetailresultatService) { }
 
   ngOnInit(): void {
    this.findListResult();
    
   }
   findListResult():void{
    
    this.detailresultatService.findAllDetailResult().subscribe(res => {
      this.listeResult=res;
      console.log(this.listeResult);
      

})
}
nouvelResultat():void{
     this.router.navigate(['nouvelResultat']);
 
   }
   exporteResultat():void{
    this.router.navigate(['exportResultat']);

  }
   handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListResult;
    } else {
      this.errorMsgs = event;
    }
  
  }
 
 }
