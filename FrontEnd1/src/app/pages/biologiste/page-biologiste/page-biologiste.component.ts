import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BiologisteeService } from 'src/app/services/biologiste/biologistee.service';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';

@Component({
  selector: 'app-page-biologiste',
  templateUrl: './page-biologiste.component.html',
  styleUrls: ['./page-biologiste.component.css']
})
export class PageBiologisteComponent implements OnInit {
  listeBiologist :Array<BiologisteDTO>  = [];
  errorMsgs = '';
  constructor( private router :Router,
    private BiologisteeService :BiologisteeService) { }

  ngOnInit(): void {
    this.findListBiologist();
  }
  findListBiologist():void{
    this.BiologisteeService.findAllBiologiste().subscribe(res => {
      this.listeBiologist=res;
  
})
}
  nouveauBiologist(): void{
    this.router.navigate(['nouveauBiologist'])
  }
  handleSuppression(event: any): void{
    if (event === 'success') {
      this.findListBiologist;
    } else {
      this.errorMsgs = event;
    }
  
  }

}
