import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {LaboDTO} from '../../../gs-api/src/models/labo-dto';
import { TestCovidv1laboService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class LaboService {
  constructor(private testCovidv1laboService: TestCovidv1laboService)
   { }
  /* enregistrerLbao(laboDto: LaboDTO): Observable<LaboDTO> {
     //return this.laboService.save(laboDto);
 
   //}*/
   findAllLabo(): Observable<LaboDTO[]> {
     return this.testCovidv1laboService.findAll();
   }
 
   findLaboById(idLabo?: number): Observable<LaboDTO> {
     if (idLabo) {
       return this.testCovidv1laboService.findById(idLabo);
     }
     return of();
   }
   enregistrerLabo(laboDt:LaboDTO):Observable<LaboDTO> {
     return this.testCovidv1laboService.save(laboDt);
   }
   deleteLabo(idLabo?: number):Observable<any>{
     if (idLabo) {
       return this.testCovidv1laboService.delete(idLabo);
     }
     return of();
 
 }
 }
 
 
 
 