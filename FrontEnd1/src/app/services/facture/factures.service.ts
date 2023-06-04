import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FactureService } from 'src/gs-api/src/services/facture.service';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  constructor( private factureService :FactureService
    ) { };
    enregistrerFacture(factureDTo:FactureDTO):Observable<FactureDTO> {
      return this.factureService.save(factureDTo);
      
    }
    findAllFacture(): Observable<FactureDTO[]> {
      return this.factureService.findAll();
    }
    findFactureById(idFacture?: number): Observable<FactureDTO> {
      if (idFacture) {
        return this.factureService.findById(idFacture);
      }
      return of();
    }
    deleteFacture(idFacture?: number):Observable<any>{
      if (idFacture) {
        return this.factureService.delete(idFacture);
      }
      return of();
    }
}