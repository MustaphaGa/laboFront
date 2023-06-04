/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AnalyseMedicalDTO } from '../models/analyse-medical-dto';
@Injectable({
  providedIn: 'root',
})
class AnalyseMedicalService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/analyseMedical/all';
  static readonly savePath = '/testCovid/v1/analyseMedical/create';
  static readonly delectePath = '/testCovid/v1/analyseMedical/delete/{idAnalyseMedical}';
  static readonly findByIdPath = '/testCovid/v1/analyseMedical/filter{idAnalyseMedical}';
  static readonly findByDateAnalysePath = '/testCovid/v1/analyseMedical/{dateAnalyse}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes d'analyse qui existent dans la BDD
   * @return la liste d'analyse medical / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AnalyseMedicalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/analyseMedical/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AnalyseMedicalDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes d'analyse qui existent dans la BDD
   * @return la liste d'analyse medical / une liste vide
   */
  findAll(): __Observable<Array<AnalyseMedicalDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AnalyseMedicalDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer oumodifier un analyse medical
   * @param body undefined
   * @return l'objet analyse medical cree / modifie
   */
  saveResponse(body?: AnalyseMedicalDTO): __Observable<__StrictHttpResponse<AnalyseMedicalDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/analyseMedical/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnalyseMedicalDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer oumodifier un analyse medical
   * @param body undefined
   * @return l'objet analyse medical cree / modifie
   */
  save(body?: AnalyseMedicalDTO): __Observable<AnalyseMedicalDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as AnalyseMedicalDTO)
    );
  }

  /**
   * Cette methode permet de supprimer l'analyse Medical par ID
   * @param idAnalyseMedical undefined
   * @return analyse Medical a ete supprimer
   */
  delecteResponse(idAnalyseMedical: number): __Observable<__StrictHttpResponse<AnalyseMedicalDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/analyseMedical/delete/${idAnalyseMedical}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnalyseMedicalDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer l'analyse Medical par ID
   * @param idAnalyseMedical undefined
   * @return analyse Medical a ete supprimer
   */
  delecte(idAnalyseMedical: number): __Observable<AnalyseMedicalDTO> {
    return this.delecteResponse(idAnalyseMedical).pipe(
      __map(_r => _r.body as AnalyseMedicalDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  d'analyse medical par son ID
   * @param idAnalyseMedical undefined
   * @return l'analyse medical a ete trouver dans la BDD
   */
  findByIdResponse(idAnalyseMedical: number): __Observable<__StrictHttpResponse<AnalyseMedicalDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/analyseMedical/filter${idAnalyseMedical}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnalyseMedicalDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  d'analyse medical par son ID
   * @param idAnalyseMedical undefined
   * @return l'analyse medical a ete trouver dans la BDD
   */
  findById(idAnalyseMedical: number): __Observable<AnalyseMedicalDTO> {
    return this.findByIdResponse(idAnalyseMedical).pipe(
      __map(_r => _r.body as AnalyseMedicalDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un analyse medical par son date
   * @param dateAnalyse undefined
   * @return l'analyse medical a ete trouver dans la BDD
   */
  findByDateAnalyseResponse(dateAnalyse: string): __Observable<__StrictHttpResponse<AnalyseMedicalDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/analyseMedical/${dateAnalyse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnalyseMedicalDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un analyse medical par son date
   * @param dateAnalyse undefined
   * @return l'analyse medical a ete trouver dans la BDD
   */
  findByDateAnalyse(dateAnalyse: string): __Observable<AnalyseMedicalDTO> {
    return this.findByDateAnalyseResponse(dateAnalyse).pipe(
      __map(_r => _r.body as AnalyseMedicalDTO)
    );
  }
}

module AnalyseMedicalService {
}

export { AnalyseMedicalService }
