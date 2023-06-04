import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { PreleveurDTO } from 'src/gs-api/src/models/preleveur-dto';
import { PreleveurService } from 'src/gs-api/src/services/preleveur.service';

@Injectable({
  providedIn: 'root'
})
export class PreleveursService {

  constructor( private preleveurService:PreleveurService
    ) { };
  enregistrerPreleveur(preleveurDto:PreleveurDTO):Observable<PreleveurDTO> {
    return this.preleveurService.save(preleveurDto);
    
  }
  findAllPreleveur(): Observable<PreleveurDTO[]> {
    return this.preleveurService.findAll();
  }
  findPreleveurById(idPreleveur?: number): Observable<PreleveurDTO> {
    if (idPreleveur) {
      return this.preleveurService.findById(idPreleveur);
    }
    return of();
  }
  deletePreleveur(idPreleveur?: number):Observable<any>{
    if (idPreleveur) {
      return this.preleveurService.delete(idPreleveur);
    }
    return of();
  }
}
