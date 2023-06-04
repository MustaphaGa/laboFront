/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RolesDTO } from '../models/roles-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1rolesService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/role/all';
  static readonly savePath = '/testCovid/v1/role/create';
  static readonly delectePath = '/testCovid/v1/role/delete/{idRole}';
  static readonly findByIdPath = '/testCovid/v1/role/{idRole}';

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
  findAllResponse(): __Observable<__StrictHttpResponse<Array<RolesDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/role/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RolesDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des patients qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<RolesDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<RolesDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un role
   * @param body undefined
   * @return l'objet role cree / modifie
   */
  saveResponse(body?: RolesDTO): __Observable<__StrictHttpResponse<RolesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/role/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un role
   * @param body undefined
   * @return l'objet role cree / modifie
   */
  save(body?: RolesDTO): __Observable<RolesDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as RolesDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un role par ID
   * @param idRole undefined
   * @return patient a ete supprimer
   */
  delecteResponse(idRole: number): __Observable<__StrictHttpResponse<RolesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/role/delete/${idRole}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un role par ID
   * @param idRole undefined
   * @return patient a ete supprimer
   */
  delecte(idRole: number): __Observable<RolesDTO> {
    return this.delecteResponse(idRole).pipe(
      __map(_r => _r.body as RolesDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un role par son ID
   * @param idRole undefined
   * @return la patient a ete trouver dans la BDD
   */
  findByIdResponse(idRole: number): __Observable<__StrictHttpResponse<RolesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/role/${idRole}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un role par son ID
   * @param idRole undefined
   * @return la patient a ete trouver dans la BDD
   */
  findById(idRole: number): __Observable<RolesDTO> {
    return this.findByIdResponse(idRole).pipe(
      __map(_r => _r.body as RolesDTO)
    );
  }
}

module TestCovidv1rolesService {
}

export { TestCovidv1rolesService }
