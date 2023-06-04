import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeDTO } from 'src/gs-api/src/models';
import { TestCovidv1employeService } from 'src/gs-api/src/services/test-covidv-1employe.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor( private testCovidv1employeService :TestCovidv1employeService
    ) { };
    
    enregistrerEmploye(employeDt:EmployeDTO):Observable<EmployeDTO> {
      return this.testCovidv1employeService.save(employeDt);
      
    }
    findAllEmploye(): Observable<EmployeDTO[]> {
      return this.testCovidv1employeService.findAll();
    }
    findEmployeById(idEmploye?: number): Observable<EmployeDTO> {
      if (idEmploye) {
        return this.testCovidv1employeService.findById(idEmploye);
      }
      return of();
    }
    deleteEmploye(idEmploye?: number):Observable<any>{
      if (idEmploye) {
        return this.testCovidv1employeService.delete(idEmploye);
      }
      return of();
    }
    }
    

