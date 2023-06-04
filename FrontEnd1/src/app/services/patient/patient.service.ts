import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';
import { TestCovidv1patientService } from '../../../gs-api/src/services/test-covidv-1patient.service';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private testcovidv1patientService : TestCovidv1patientService
    ) { };
   
   enregistrerpatient(patientDt:PatientDTO):Observable<PatientDTO> {
     return this.testcovidv1patientService.save(patientDt);
   }
   findAllPatient(): Observable<PatientDTO[]> {
    return this.testcovidv1patientService.findAll();
  }

  findPatientById(idPatient?: number): Observable<PatientDTO> {
    if (idPatient) {
      return this.testcovidv1patientService.findById(idPatient);
    }
    return of();
  }
  deletePatient(idPatient?: number):Observable<any>{
    if (idPatient) {
      return this.testcovidv1patientService.delecte(idPatient);
    }
    return of();
  }
  findPatientByCode(codePatient: string): Observable<PatientDTO>{
    return this.testcovidv1patientService.findPatientByCodePatient(codePatient);
  }
 
}
