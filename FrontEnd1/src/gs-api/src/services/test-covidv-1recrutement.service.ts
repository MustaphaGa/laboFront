/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RecrutementDTO } from '../models/recrutement-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1recrutementService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/recrutement/all';
  static readonly savePath = '/testCovid/v1/recrutement/create';
  static readonly delectePath = '/testCovid/v1/recrutement/delete/{idRecrutement}';
  static readonly findByDateRecrutementPath = '/testCovid/v1/recrutement/filter{dateRecrutement}';
  static readonly findByIdRecrutementPath = '/testCovid/v1/recrutement/{idRecrutement}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des recrutements qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<RecrutementDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/recrutement/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RecrutementDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des recrutements qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<RecrutementDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<RecrutementDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un recrutement
   * @param body undefined
   * @return l'objet recrutement cree / modifie
   */
  saveResponse(body?: RecrutementDTO): __Observable<__StrictHttpResponse<RecrutementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/recrutement/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecrutementDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un recrutement
   * @param body undefined
   * @return l'objet recrutement cree / modifie
   */
  save(body?: RecrutementDTO): __Observable<RecrutementDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as RecrutementDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un recrutement par ID
   * @param idRecrutement undefined
   * @return recrutement a ete supprimer
   */
  delecteResponse(idRecrutement: number): __Observable<__StrictHttpResponse<RecrutementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/recrutement/delete/${idRecrutement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecrutementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un recrutement par ID
   * @param idRecrutement undefined
   * @return recrutement a ete supprimer
   */
  delecte(idRecrutement: number): __Observable<RecrutementDTO> {
    return this.delecteResponse(idRecrutement).pipe(
      __map(_r => _r.body as RecrutementDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un recrutement par son date
   * @param dateRecrutement undefined
   * @return la recrutement a ete trouver dans la BDD
   */
  findByDateRecrutementResponse(dateRecrutement: string): __Observable<__StrictHttpResponse<RecrutementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/recrutement/filter${dateRecrutement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecrutementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un recrutement par son date
   * @param dateRecrutement undefined
   * @return la recrutement a ete trouver dans la BDD
   */
  findByDateRecrutement(dateRecrutement: string): __Observable<RecrutementDTO> {
    return this.findByDateRecrutementResponse(dateRecrutement).pipe(
      __map(_r => _r.body as RecrutementDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un recrutement par son ID
   * @param idRecrutement undefined
   * @return la recrutement a ete trouver dans la BDD
   */
  findByIdRecrutementResponse(idRecrutement: number): __Observable<__StrictHttpResponse<RecrutementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/recrutement/${idRecrutement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecrutementDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un recrutement par son ID
   * @param idRecrutement undefined
   * @return la recrutement a ete trouver dans la BDD
   */
  findByIdRecrutement(idRecrutement: number): __Observable<RecrutementDTO> {
    return this.findByIdRecrutementResponse(idRecrutement).pipe(
      __map(_r => _r.body as RecrutementDTO)
    );
  }
}

module TestCovidv1recrutementService {
}

export { TestCovidv1recrutementService }
