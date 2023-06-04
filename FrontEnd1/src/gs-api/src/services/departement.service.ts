/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DepartementDTO } from '../models/departement-dto';
@Injectable({
  providedIn: 'root',
})
class DepartementService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/departement/all';
  static readonly savePath = '/testCovid/v1/departement/update';
  static readonly findByIdPath = '/testCovid/v1/departement/{idDepartement}';
  static readonly findByNomDeDepartementPath = '/testCovid/v1/departement/{nomDepartement}';
  static readonly delectePath = '/testCovid/v1/departements/delete/{idDepartement}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des departement qui existent dans la BDD
   * @return la liste des departement / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<DepartementDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/departement/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DepartementDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des departement qui existent dans la BDD
   * @return la liste des departement / une liste vide
   */
  findAll(): __Observable<Array<DepartementDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<DepartementDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un departement
   * @param body undefined
   * @return l'objet departement cree / modifie
   */
  saveResponse(body?: DepartementDTO): __Observable<__StrictHttpResponse<DepartementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/testCovid/v1/departement/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepartementDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un departement
   * @param body undefined
   * @return l'objet departement cree / modifie
   */
  save(body?: DepartementDTO): __Observable<DepartementDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as DepartementDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un departement par son ID
   * @param idDepartement undefined
   * @return la departement a ete trouver dans la BDD
   */
  findByIdResponse(idDepartement: number): __Observable<__StrictHttpResponse<DepartementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/departement/${idDepartement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepartementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un departement par son ID
   * @param idDepartement undefined
   * @return la departement a ete trouver dans la BDD
   */
  findById(idDepartement: number): __Observable<DepartementDTO> {
    return this.findByIdResponse(idDepartement).pipe(
      __map(_r => _r.body as DepartementDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un departement par son nom de departement
   * @param nomDepartement undefined
   * @return la departement a ete trouver dans la BDD
   */
  findByNomDeDepartementResponse(nomDepartement: string): __Observable<__StrictHttpResponse<DepartementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/departement/${nomDepartement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepartementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un departement par son nom de departement
   * @param nomDepartement undefined
   * @return la departement a ete trouver dans la BDD
   */
  findByNomDeDepartement(nomDepartement: string): __Observable<DepartementDTO> {
    return this.findByNomDeDepartementResponse(nomDepartement).pipe(
      __map(_r => _r.body as DepartementDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un departement par ID
   * @param idDepartement undefined
   * @return departement a ete supprimer
   */
  delecteResponse(idDepartement: number): __Observable<__StrictHttpResponse<DepartementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/departements/delete/${idDepartement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DepartementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un departement par ID
   * @param idDepartement undefined
   * @return departement a ete supprimer
   */
  delecte(idDepartement: number): __Observable<DepartementDTO> {
    return this.delecteResponse(idDepartement).pipe(
      __map(_r => _r.body as DepartementDTO)
    );
  }
}

module DepartementService {
}

export { DepartementService }
