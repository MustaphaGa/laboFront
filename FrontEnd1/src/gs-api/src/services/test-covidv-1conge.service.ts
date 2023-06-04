/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CongeDTO } from '../models/conge-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1congeService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/conge/all';
  static readonly savePath = '/testCovid/v1/conge/create';
  static readonly delectePath = '/testCovid/v1/conge/delete/{idConge}';
  static readonly findByIdPath = '/testCovid/v1/conge/{idConge}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des conges qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CongeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/conge/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CongeDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des conges qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<CongeDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CongeDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un conge
   * @param body undefined
   * @return l'objet conge cree / modifie
   */
  saveResponse(body?: CongeDTO): __Observable<__StrictHttpResponse<CongeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/conge/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CongeDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un conge
   * @param body undefined
   * @return l'objet conge cree / modifie
   */
  save(body?: CongeDTO): __Observable<CongeDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CongeDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un conge par ID
   * @param idConge undefined
   * @return patient a ete supprimer
   */
  delecteResponse(idConge: number): __Observable<__StrictHttpResponse<CongeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/conge/delete/${idConge}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CongeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un conge par ID
   * @param idConge undefined
   * @return patient a ete supprimer
   */
  delecte(idConge: number): __Observable<CongeDTO> {
    return this.delecteResponse(idConge).pipe(
      __map(_r => _r.body as CongeDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un conge par son ID
   * @param idConge undefined
   * @return conge a ete trouver dans la BDD
   */
  findByIdResponse(idConge: number): __Observable<__StrictHttpResponse<CongeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/conge/${idConge}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CongeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un conge par son ID
   * @param idConge undefined
   * @return conge a ete trouver dans la BDD
   */
  findById(idConge: number): __Observable<CongeDTO> {
    return this.findByIdResponse(idConge).pipe(
      __map(_r => _r.body as CongeDTO)
    );
  }
}

module TestCovidv1congeService {
}

export { TestCovidv1congeService }
