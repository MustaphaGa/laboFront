import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';
import { AnalyseMedicalService } from 'src/gs-api/src/services/analyse-medical.service';

@Injectable({
  providedIn: 'root'
})
export class AnnalyseMedicalService {

  constructor( private analyseMedicalService:AnalyseMedicalService ) { }
  enregistrerAnalysMedical(analyseMedicalDtto:AnalyseMedicalDTO):Observable<AnalyseMedicalDTO> {
    return this.analyseMedicalService.save(analyseMedicalDtto);
    
  }
  findAllAnalysMedical(): Observable<AnalyseMedicalDTO[]> {
    return this.analyseMedicalService.findAll();
  }
  findAnalysMedicalById(idAnalyse?: number): Observable<AnalyseMedicalDTO> {
    if (idAnalyse) {
      return this.analyseMedicalService.findById(idAnalyse);
    }
    return of();
  }
  deleteAnalyse(idAnalyse?: number):Observable<any>{
    if (idAnalyse) {
      return this.analyseMedicalService.delecte(idAnalyse);
    }
    return of();
  }
}
