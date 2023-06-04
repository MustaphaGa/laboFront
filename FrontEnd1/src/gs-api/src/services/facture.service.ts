/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FactureDTO } from '../models/facture-dto';
@Injectable({
  providedIn: 'root',
})
class FactureService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/facture/all';
  static readonly savePath = '/testCovid/v1/facture/create';
  static readonly deletePath = '/testCovid/v1/facture/delete/{idFacture}';
  static readonly findByIdPath = '/testCovid/v1/facture/{idFacture}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des facture qui existent dans la BDD
   * @return la liste des factures / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<FactureDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/facture/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FactureDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des facture qui existent dans la BDD
   * @return la liste des factures / une liste vide
   */
  findAll(): __Observable<Array<FactureDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<FactureDTO>)
    );
  }

  /**
   * Cette methode permet d'enresitrer ou  modifier une facture
   * @param body undefined
   * @return l'objet facture cree / modifie
   */
  saveResponse(body?: FactureDTO): __Observable<__StrictHttpResponse<FactureDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/facture/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FactureDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enresitrer ou  modifier une facture
   * @param body undefined
   * @return l'objet facture cree / modifie
   */
  save(body?: FactureDTO): __Observable<FactureDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as FactureDTO)
    );
  }

  /**
   * Cette methode permet de supprimer une facture par ID
   * @param idFacture undefined
   * @return la facture a ete supprimer
   */
  deleteResponse(idFacture: number): __Observable<__StrictHttpResponse<FactureDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/facture/delete/${idFacture}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FactureDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer une facture par ID
   * @param idFacture undefined
   * @return la facture a ete supprimer
   */
  delete(idFacture: number): __Observable<FactureDTO> {
    return this.deleteResponse(idFacture).pipe(
      __map(_r => _r.body as FactureDTO)
    );
  }

  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param idFacture undefined
   * @return la facture a ete trouver dans la BDD
   */
  findByIdResponse(idFacture: number): __Observable<__StrictHttpResponse<FactureDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/facture/${idFacture}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FactureDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param idFacture undefined
   * @return la facture a ete trouver dans la BDD
   */
  findById(idFacture: number): __Observable<FactureDTO> {
    return this.findByIdResponse(idFacture).pipe(
      __map(_r => _r.body as FactureDTO)
    );
  }
}

module FactureService {
}

export { FactureService }
