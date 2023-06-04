/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TypeAnalyseDTO } from '../models/type-analyse-dto';
@Injectable({
  providedIn: 'root',
})
class TypeAnalyseService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/typeAnalyse/all';
  static readonly savePath = '/testCovid/v1/typeAnalyse/create';
  static readonly delectePath = '/testCovid/v1/typeAnalyse/delete/{idTypeAnalyse}';
  static readonly findByTypeAnalysePath = '/testCovid/v1/typeAnalyse/filter{typeAnalyse}';
  static readonly findByIdPath = '/testCovid/v1/typeAnalyse/{idTypeAnalyse}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des typeAnalyses qui existent dans la BDD
   * @return la liste des typeAnalyse / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<TypeAnalyseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/typeAnalyse/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TypeAnalyseDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des typeAnalyses qui existent dans la BDD
   * @return la liste des typeAnalyse / une liste vide
   */
  findAll(): __Observable<Array<TypeAnalyseDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<TypeAnalyseDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un typeAnalyse
   * @param body undefined
   * @return l'objet typeAnalyse cree / modifie
   */
  saveResponse(body?: TypeAnalyseDTO): __Observable<__StrictHttpResponse<TypeAnalyseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/typeAnalyse/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeAnalyseDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un typeAnalyse
   * @param body undefined
   * @return l'objet typeAnalyse cree / modifie
   */
  save(body?: TypeAnalyseDTO): __Observable<TypeAnalyseDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as TypeAnalyseDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un typeAnalyse par ID
   * @param idTypeAnalyse undefined
   * @return typeAnalyse a ete supprimer
   */
  delecteResponse(idTypeAnalyse: number): __Observable<__StrictHttpResponse<TypeAnalyseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/typeAnalyse/delete/${idTypeAnalyse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeAnalyseDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un typeAnalyse par ID
   * @param idTypeAnalyse undefined
   * @return typeAnalyse a ete supprimer
   */
  delecte(idTypeAnalyse: number): __Observable<TypeAnalyseDTO> {
    return this.delecteResponse(idTypeAnalyse).pipe(
      __map(_r => _r.body as TypeAnalyseDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un typeAnalyse par son TYPEANALYSE
   * @param typeAnalyse undefined
   * @return la typeAnalyse a ete trouver dans la BDD
   */
  findByTypeAnalyseResponse(typeAnalyse: string): __Observable<__StrictHttpResponse<TypeAnalyseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/typeAnalyse/filter${typeAnalyse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeAnalyseDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un typeAnalyse par son TYPEANALYSE
   * @param typeAnalyse undefined
   * @return la typeAnalyse a ete trouver dans la BDD
   */
  findByTypeAnalyse(typeAnalyse: string): __Observable<TypeAnalyseDTO> {
    return this.findByTypeAnalyseResponse(typeAnalyse).pipe(
      __map(_r => _r.body as TypeAnalyseDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un typeAnalyse par son ID
   * @param idTypeAnalyse undefined
   * @return la typeAnalyse a ete trouver dans la BDD
   */
  findByIdResponse(idTypeAnalyse: number): __Observable<__StrictHttpResponse<TypeAnalyseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/typeAnalyse/${idTypeAnalyse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeAnalyseDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un typeAnalyse par son ID
   * @param idTypeAnalyse undefined
   * @return la typeAnalyse a ete trouver dans la BDD
   */
  findById(idTypeAnalyse: number): __Observable<TypeAnalyseDTO> {
    return this.findByIdResponse(idTypeAnalyse).pipe(
      __map(_r => _r.body as TypeAnalyseDTO)
    );
  }
}

module TypeAnalyseService {
}

export { TypeAnalyseService }
