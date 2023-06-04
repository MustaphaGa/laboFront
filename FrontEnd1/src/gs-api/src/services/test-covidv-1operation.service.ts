/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OperationDTO } from '../models/operation-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1operationService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/operation/all';
  static readonly savePath = '/testCovid/v1/operation/create';
  static readonly delectePath = '/testCovid/v1/operation/delete/{idOperation}';
  static readonly findByDateOperationPath = '/testCovid/v1/operation/filter{dateOperation}';
  static readonly findByIdPath = '/testCovid/v1/operation/{idOperation}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des operations qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<OperationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/operation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OperationDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des operations qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<OperationDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<OperationDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un operation
   * @param body undefined
   * @return l'objet operation cree / modifie
   */
  saveResponse(body?: OperationDTO): __Observable<__StrictHttpResponse<OperationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/operation/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un operation
   * @param body undefined
   * @return l'objet operation cree / modifie
   */
  save(body?: OperationDTO): __Observable<OperationDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as OperationDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un operation par ID
   * @param idOperation undefined
   * @return operation a ete supprimer
   */
  delecteResponse(idOperation: number): __Observable<__StrictHttpResponse<OperationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/operation/delete/${idOperation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un operation par ID
   * @param idOperation undefined
   * @return operation a ete supprimer
   */
  delecte(idOperation: number): __Observable<OperationDTO> {
    return this.delecteResponse(idOperation).pipe(
      __map(_r => _r.body as OperationDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un operation par son date
   * @param dateOperation undefined
   * @return la operation a ete trouver dans la BDD
   */
  findByDateOperationResponse(dateOperation: string): __Observable<__StrictHttpResponse<OperationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/operation/filter${dateOperation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un operation par son date
   * @param dateOperation undefined
   * @return la operation a ete trouver dans la BDD
   */
  findByDateOperation(dateOperation: string): __Observable<OperationDTO> {
    return this.findByDateOperationResponse(dateOperation).pipe(
      __map(_r => _r.body as OperationDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un operation par son ID
   * @param idOperation undefined
   * @return la patient a ete trouver dans la BDD
   */
  findByIdResponse(idOperation: number): __Observable<__StrictHttpResponse<OperationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/operation/${idOperation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un operation par son ID
   * @param idOperation undefined
   * @return la patient a ete trouver dans la BDD
   */
  findById(idOperation: number): __Observable<OperationDTO> {
    return this.findByIdResponse(idOperation).pipe(
      __map(_r => _r.body as OperationDTO)
    );
  }
}

module TestCovidv1operationService {
}

export { TestCovidv1operationService }
