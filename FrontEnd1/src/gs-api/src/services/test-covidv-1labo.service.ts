/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LaboDTO } from '../models/labo-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1laboService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/labo/all';
  static readonly savePath = '/testCovid/v1/labo/create';
  static readonly deletePath = '/testCovid/v1/labo/delete/{idLabo}';
  static readonly findByIdPath = '/testCovid/v1/labo/{idLabo}';
  private idLabo: any;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des labos qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<LaboDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/labo/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LaboDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des labos qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<LaboDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<LaboDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un labo
   * @param body undefined
   * @return l'objet patient cree / modifie
   */
  saveResponse(body?: LaboDTO): __Observable<__StrictHttpResponse<LaboDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/labo/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un labo
   * @param body undefined
   * @return l'objet patient cree / modifie
   */
  save(body?: LaboDTO): __Observable<LaboDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as LaboDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un labo par ID
   * @return labo  a ete supprimer
   */
  deleteResponse(): __Observable<__StrictHttpResponse<LaboDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/labo/delete/${(this.idLabo)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un labo par ID
   * @return labo  a ete supprimer
   */
  delete(idLabo: number): __Observable<LaboDTO> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as LaboDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un labo par son ID
   * @return  labo a ete trouver dans la BDD
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<LaboDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let idLabo;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/labo/${idLabo}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un labo par son ID
   * @return  labo a ete trouver dans la BDD
   */
  findById(idLabo: number): __Observable<LaboDTO> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as LaboDTO)
    );
  }
}

module TestCovidv1laboService {
}

export { TestCovidv1laboService }
