import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartementDTO } from 'src/gs-api/src/models/departement-dto';
import { DepartementService } from 'src/gs-api/src/services/departement.service';

@Injectable({
  providedIn: 'root'
})
export class DeepartementService {

  constructor( private departementService :DepartementService
    ) { };
    enregistrerdepartement(departementdto:DepartementDTO):Observable<DepartementDTO> {
      return this.departementService.save(departementdto);
      
    }
    findAllDepartement(): Observable<DepartementDTO[]> {
      return this.departementService.findAll();
    }
    findDepartementById(idDepartement?: number): Observable<DepartementDTO> {
      if (idDepartement) {
        return this.departementService.findById(idDepartement);
      }
      return of();
    }
}
