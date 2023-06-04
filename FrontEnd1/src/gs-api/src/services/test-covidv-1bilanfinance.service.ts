/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BilanFinancierDTO } from '../models/bilan-financier-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1bilanfinanceService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/bilanfinance/all';
  static readonly savePath = '/testCovid/v1/bilanfinance/create';
  static readonly delectePath = '/testCovid/v1/bilanfinance/delete/{idBilan}';
  static readonly findByIdPath = '/testCovid/v1/bilanfinance/{bilanfinance}';
  private bilanfinance: any;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des bilanfinance qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<BilanFinancierDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/bilanfinance/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BilanFinancierDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des bilanfinance qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<BilanFinancierDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<BilanFinancierDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un bilanfinance
   * @param body undefined
   * @return l'objet idBilan cree / modifie
   */
  saveResponse(body?: BilanFinancierDTO): __Observable<__StrictHttpResponse<BilanFinancierDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/bilanfinance/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BilanFinancierDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un bilanfinance
   * @param body undefined
   * @return l'objet idBilan cree / modifie
   */
  save(body?: BilanFinancierDTO): __Observable<BilanFinancierDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as BilanFinancierDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un bilanfinance par ID
   * @param idBilan undefined
   * @return bilanfinance a ete supprimer
   */
  delecteResponse(idBilan: number): __Observable<__StrictHttpResponse<BilanFinancierDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/bilanfinance/delete/${idBilan}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BilanFinancierDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un bilanfinance par ID
   * @param idBilan undefined
   * @return bilanfinance a ete supprimer
   */
  delecte(idBilan: number): __Observable<BilanFinancierDTO> {
    return this.delecteResponse(idBilan).pipe(
      __map(_r => _r.body as BilanFinancierDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un bilanfinance par son ID
   * @param idBilan undefined
   * @return  bilanfinance a ete trouver dans la BDD
   */
  findByIdResponse(idBilan: number): __Observable<__StrictHttpResponse<BilanFinancierDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/bilanfinance/${(this.bilanfinance)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BilanFinancierDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un bilanfinance par son ID
   * @param idBilan undefined
   * @return  bilanfinance a ete trouver dans la BDD
   */
  findById(idBilan: number): __Observable<BilanFinancierDTO> {
    return this.findByIdResponse(idBilan).pipe(
      __map(_r => _r.body as BilanFinancierDTO)
    );
  }
}

module TestCovidv1bilanfinanceService {
}

export { TestCovidv1bilanfinanceService }
