/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MouvementDTO } from '../models/mouvement-dto';
import { PatientDTO } from '../models/patient-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1mouvementService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/mouvement/all';
  static readonly savePath = '/testCovid/v1/mouvement/create';
  static readonly findByIdPath = '/testCovid/v1/mouvement/{idMouvement}';
  static readonly delectePath = '/testCovid/v1/patient/delete/{idMouvement}';
  static readonly findPatientByCodePatientPath = '/testCovid/v1/patient/filter{typeMouvement}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des mouvements qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<MouvementDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/mouvement/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MouvementDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des mouvements qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<MouvementDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<MouvementDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un mouvement
   * @param body undefined
   * @return l'objet mouvement cree / modifie
   */
  saveResponse(body?: MouvementDTO): __Observable<__StrictHttpResponse<MouvementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/mouvement/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un mouvement
   * @param body undefined
   * @return l'objet mouvement cree / modifie
   */
  save(body?: MouvementDTO): __Observable<MouvementDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as MouvementDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un mouvement par son ID
   * @param idMouvement undefined
   * @return la patient a ete trouver dans la BDD
   */
  findByIdResponse(idMouvement: number): __Observable<__StrictHttpResponse<MouvementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/mouvement/${idMouvement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un mouvement par son ID
   * @param idMouvement undefined
   * @return la patient a ete trouver dans la BDD
   */
  findById(idMouvement: number): __Observable<MouvementDTO> {
    return this.findByIdResponse(idMouvement).pipe(
      __map(_r => _r.body as MouvementDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un mouvement par ID
   * @param idMouvement undefined
   * @return patient a ete supprimer
   */
  delecteResponse(idMouvement: number): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/patient/delete/${idMouvement}`,
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
   * Cette methode permet de supprimer un mouvement par ID
   * @param idMouvement undefined
   * @return patient a ete supprimer
   */
  delecte(idMouvement: number): __Observable<PatientDTO> {
    return this.delecteResponse(idMouvement).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un mouvement par son CODE
   * @param typeMouvement undefined
   * @return la mouvement a ete trouver dans la BDD
   */
  findPatientByCodePatientResponse(typeMouvement: string): __Observable<__StrictHttpResponse<MouvementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/patient/filter${typeMouvement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un mouvement par son CODE
   * @param typeMouvement undefined
   * @return la mouvement a ete trouver dans la BDD
   */
  findPatientByCodePatient(typeMouvement: string): __Observable<MouvementDTO> {
    return this.findPatientByCodePatientResponse(typeMouvement).pipe(
      __map(_r => _r.body as MouvementDTO)
    );
  }
}

module TestCovidv1mouvementService {
}

export { TestCovidv1mouvementService }
