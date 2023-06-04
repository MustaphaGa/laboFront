import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BiologisteDTO } from 'src/gs-api/src/models/biologiste-dto';
import { BiologisteService } from 'src/gs-api/src/services/biologiste.service';

@Injectable({
  providedIn: 'root'
})
export class BiologisteeService {

  constructor( private biologisteService :BiologisteService
    ) { };
    enregistrerBiologiste(biologisteDt:BiologisteDTO):Observable<BiologisteDTO> {
      return this.biologisteService.save(biologisteDt);
      
    }
    findAllBiologiste(): Observable<BiologisteDTO[]> {
      return this.biologisteService.findAll();
    }
    findBiologistById(idBiologiste?: number): Observable<BiologisteDTO> {
      if (idBiologiste) {
        return this.biologisteService.findById(idBiologiste);
      }
      return of();
    }
    deleteBiologist(idBiologiste?: number):Observable<any>{
      if (idBiologiste) {
        return this.biologisteService.delecte(idBiologiste);
      }
      return of();
    }
}

