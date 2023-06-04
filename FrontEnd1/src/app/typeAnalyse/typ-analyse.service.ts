import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypeAnalyseDTO } from 'src/gs-api/src/models/type-analyse-dto';
import { TypeAnalyseService } from 'src/gs-api/src/services/type-analyse.service';

@Injectable({
  providedIn: 'root'
})
export class TypAnalyseService {

  constructor( private typeAnalyseService :TypeAnalyseService
    ) { };
    enregistrerTypeAnalyse(typeAnalysedTo:TypeAnalyseDTO):Observable<TypeAnalyseDTO> {
      return this.typeAnalyseService.save(typeAnalysedTo);
      
    }
    findAllTypeAnalyse(): Observable<TypeAnalyseDTO[]> {
      return this.typeAnalyseService.findAll();
    }
    findTypeAnalyseById(idTypeAnalyse?: number): Observable<TypeAnalyseDTO> {
      if (idTypeAnalyse) {
        return this.typeAnalyseService.findById(idTypeAnalyse);
      }
      return of();
    }
}
