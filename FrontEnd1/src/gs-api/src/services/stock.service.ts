/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StockDTO } from '../models/stock-dto';
@Injectable({
  providedIn: 'root',
})
class StockService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/stock/all';
  static readonly savePath = '/testCovid/v1/stock/create';
  static readonly deletePath = '/testCovid/v1/stock/delete/{idStock}';
  static readonly findBydateVerificationPath = '/testCovid/v1/stock/filter{dateVerification}';
  static readonly findByIdPath = '/testCovid/v1/stock/{idStock}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des stock qui existent dans la BDD
   * @return la liste des stock / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<StockDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/stock/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StockDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des stock qui existent dans la BDD
   * @return la liste des stock / une liste vide
   */
  findAll(): __Observable<Array<StockDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<StockDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un stock
   * @param body undefined
   * @return l'objet reservation cree / modifie
   */
  saveResponse(body?: StockDTO): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/stock/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un stock
   * @param body undefined
   * @return l'objet reservation cree / modifie
   */
  save(body?: StockDTO): __Observable<StockDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un stock par ID
   * @param idStock undefined
   * @return reservation a ete supprimer
   */
  deleteResponse(idStock: number): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/stock/delete/${idStock}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un stock par ID
   * @param idStock undefined
   * @return reservation a ete supprimer
   */
  delete(idStock: number): __Observable<StockDTO> {
    return this.deleteResponse(idStock).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un stock par date de Reservation
   * @param dateVerification undefined
   * @return la stock a ete trouver dans la BDD
   */
  findBydateVerificationResponse(dateVerification: string): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/stock/filter${dateVerification}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un stock par date de Reservation
   * @param dateVerification undefined
   * @return la stock a ete trouver dans la BDD
   */
  findBydateVerification(dateVerification: string): __Observable<StockDTO> {
    return this.findBydateVerificationResponse(dateVerification).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un stock par son ID
   * @param idStock undefined
   * @return la stock a ete trouver dans la BDD
   */
  findByIdResponse(idStock: number): __Observable<__StrictHttpResponse<StockDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/stock/${idStock}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un stock par son ID
   * @param idStock undefined
   * @return la stock a ete trouver dans la BDD
   */
  findById(idStock: number): __Observable<StockDTO> {
    return this.findByIdResponse(idStock).pipe(
      __map(_r => _r.body as StockDTO)
    );
  }
}

module StockService {
}

export { StockService }
