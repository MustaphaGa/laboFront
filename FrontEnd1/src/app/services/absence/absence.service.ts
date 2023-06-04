import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbsenceDTO } from 'src/gs-api/src/models';
import { TestCovidv1absenceService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(
    private testCovidv1absenceService: TestCovidv1absenceService)
     { }
     
   enregistrerabsence(absenceDt:AbsenceDTO):Observable<AbsenceDTO> {
    return this.testCovidv1absenceService.save(absenceDt);
  }
  findAllAbsence(): Observable<AbsenceDTO[]> {
   return this.testCovidv1absenceService.findAll();
 }

 findAbsenceById(idAbsence?: number): Observable<AbsenceDTO> {
   if (idAbsence) {
     return this.testCovidv1absenceService.findById(idAbsence);
   }
   return of();
 }

 deleteAbsence(idAbsence?: number):Observable<any>{
   if (idAbsence) {
     return this.testCovidv1absenceService.delete(idAbsence);
   }
   return of();
 }
 findByabsenceMotif(motif: string): Observable<AbsenceDTO>{
   return this.testCovidv1absenceService. findByMotif(motif);
 }
}
