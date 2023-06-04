/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PreleveurDTO } from '../models/preleveur-dto';
@Injectable({
  providedIn: 'root',
})
class PreleveurService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/preleveur/all';
  static readonly savePath = '/testCovid/v1/preleveur/create';
  static readonly deletePath = '/testCovid/v1/preleveur/delete/{idPreleveur}';
  static readonly findBySpecialitePath = '/testCovid/v1/preleveur/filter{specialite}';
  static readonly findByIdPath = '/testCovid/v1/preleveur/{idPreleveur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des preleveurs qui existent dans la BDD
   * @return la liste des preleveur / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<PreleveurDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/preleveur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PreleveurDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des preleveurs qui existent dans la BDD
   * @return la liste des preleveur / une liste vide
   */
  findAll(): __Observable<Array<PreleveurDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<PreleveurDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un preleveur
   * @param body undefined
   * @return l'objet preleveur cree / modifie
   */
  saveResponse(body?: PreleveurDTO): __Observable<__StrictHttpResponse<PreleveurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/preleveur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreleveurDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un preleveur
   * @param body undefined
   * @return l'objet preleveur cree / modifie
   */
  save(body?: PreleveurDTO): __Observable<PreleveurDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as PreleveurDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un preleveur par ID
   * @param idPreleveur undefined
   * @return preleveur a ete supprimer
   */
  deleteResponse(idPreleveur: number): __Observable<__StrictHttpResponse<PreleveurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/preleveur/delete/${idPreleveur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreleveurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un preleveur par ID
   * @param idPreleveur undefined
   * @return preleveur a ete supprimer
   */
  delete(idPreleveur: number): __Observable<PreleveurDTO> {
    return this.deleteResponse(idPreleveur).pipe(
      __map(_r => _r.body as PreleveurDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un preleveur par son SPECIALITE
   * @param specialite undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findBySpecialiteResponse(specialite: string): __Observable<__StrictHttpResponse<PreleveurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/preleveur/filter${specialite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreleveurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un preleveur par son SPECIALITE
   * @param specialite undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findBySpecialite(specialite: string): __Observable<PreleveurDTO> {
    return this.findBySpecialiteResponse(specialite).pipe(
      __map(_r => _r.body as PreleveurDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un preleveur par son ID
   * @param idPreleveur undefined
   * @return la preleveur a ete trouver dans la BDD
   */
  findByIdResponse(idPreleveur: number): __Observable<__StrictHttpResponse<PreleveurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/preleveur/${idPreleveur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreleveurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un preleveur par son ID
   * @param idPreleveur undefined
   * @return la preleveur a ete trouver dans la BDD
   */
  findById(idPreleveur: number): __Observable<PreleveurDTO> {
    return this.findByIdResponse(idPreleveur).pipe(
      __map(_r => _r.body as PreleveurDTO)
    );
  }
}

module PreleveurService {
}

export { PreleveurService }
