import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import { DetailResultatService } from 'src/gs-api/src/services/detail-resultat.service';

@Injectable({
  providedIn: 'root'
})
export class DetailresultatService {

  constructor( private detailResultatService: DetailResultatService ) { }
  enregistrerDetaillResultat(detailResultatDTo: DetailResultatDTO): Observable<DetailResultatDTO> {
    return this.detailResultatService.save(detailResultatDTo);

  }
  findAllDetailResult(): Observable<DetailResultatDTO[]> {
    return this.detailResultatService.findAll();
  }
  findDetailResulatById(idResultat?: number): Observable<DetailResultatDTO> {
    if (idResultat) {
      return this.detailResultatService.findById(idResultat);
    }
    return of();
  }
  deleteResult(idResultat?: number): Observable<any>{
    if (idResultat) {
      return this.detailResultatService.delecte(idResultat);
    }
    return of();
  }
}

