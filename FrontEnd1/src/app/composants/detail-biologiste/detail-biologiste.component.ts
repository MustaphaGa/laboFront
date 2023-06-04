import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BiologisteeService } from 'src/app/services/biologiste/biologistee.service';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';

@Component({
  selector: 'app-detail-biologiste',
  templateUrl: './detail-biologiste.component.html',
  styleUrls: ['./detail-biologiste.component.css']
})
export class DetailBiologisteComponent implements OnInit {
  @Input()
  biologisteDt: BiologisteDTO ={};
  @Output()
  suppressionBiologist = new EventEmitter();
  constructor( private router:Router,
    private BiologisteeService :BiologisteeService
  
    ) { }

  ngOnInit(): void {
  }
  modifierBiologist():void{
    this.router.navigate(['nouveauBiologist',this.biologisteDt.idBiologiste])
  }
  DetailBiologist():void{
    this.router.navigate(['detailBiologist',this.biologisteDt.idBiologiste])
  }
  confirmerEtSupprimerBiologiste(): void{
    if(this.biologisteDt.idBiologiste){
      this.BiologisteeService.deleteBiologist(this.biologisteDt.idBiologiste)
       .subscribe(res => {
        this.suppressionBiologist.emit('success');
       }, error => {
         this.suppressionBiologist.emit(error.error.error);
       });
  }
  
  }

}
