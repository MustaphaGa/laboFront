/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PatientDTO } from '../models/patient-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1patientService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/patient/all';
  static readonly savePath = '/testCovid/v1/patient/create';
  static readonly delectePath = '/testCovid/v1/patient/delete/{idPatient}';
  static readonly findPatientByCodePatientPath = '/testCovid/v1/patient/filter{codePatient}';
  static readonly findByIdPath = '/testCovid/v1/patient/{idPatient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des patients qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<PatientDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/patient/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PatientDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des patients qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<PatientDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<PatientDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un patient
   * @param body undefined
   * @return l'objet patient cree / modifie
   */
  saveResponse(body?: PatientDTO): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/patient/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un patient
   * @param body undefined
   * @return l'objet patient cree / modifie
   */
  save(body?: PatientDTO): __Observable<PatientDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un patient par ID
   * @param idPatient undefined
   * @return patient a ete supprimer
   */
  delecteResponse(idPatient: number): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/patient/delete/${idPatient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un patient par ID
   * @param idPatient undefined
   * @return patient a ete supprimer
   */
  delecte(idPatient: number): __Observable<PatientDTO> {
    return this.delecteResponse(idPatient).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un patient par son CODE
   * @param codePatient undefined
   * @return la patient a ete trouver dans la BDD
   */
  findPatientByCodePatientResponse(codePatient: string): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/patient/filter${codePatient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un patient par son CODE
   * @param codePatient undefined
   * @return la patient a ete trouver dans la BDD
   */
  findPatientByCodePatient(codePatient: string): __Observable<PatientDTO> {
    return this.findPatientByCodePatientResponse(codePatient).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un patient par son ID
   * @param idPatient undefined
   * @return la patient a ete trouver dans la BDD
   */
  findByIdResponse(idPatient: number): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/patient/${idPatient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un patient par son ID
   * @param idPatient undefined
   * @return la patient a ete trouver dans la BDD
   */
  findById(idPatient: number): __Observable<PatientDTO> {
    return this.findByIdResponse(idPatient).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }
}

module TestCovidv1patientService {
}

export { TestCovidv1patientService }
