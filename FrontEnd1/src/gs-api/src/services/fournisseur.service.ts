/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDTO } from '../models/fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class FournisseurService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/fournisseur/all';
  static readonly savePath = '/testCovid/v1/fournisseur/create';
  static readonly deletePath = '/testCovid/v1/fournisseur/delete/{idFournisseur}';
  static readonly findByIdPath = '/testCovid/v1/fournisseur/{idFournisseur}';
  static readonly findByNomPath = '/testCovid/v1/fournisseur/{nom}';

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
  findAllResponse(): __Observable<__StrictHttpResponse<Array<FournisseurDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/fournisseur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des facture qui existent dans la BDD
   * @return la liste des factures / une liste vide
   */
  findAll(): __Observable<Array<FournisseurDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<FournisseurDTO>)
    );
  }

  /**
   * Cette methode permet d'enresitrer ou  modifier une fournisseur
   * @param body undefined
   * @return l'objet fournisseur cree / modifie
   */
  saveResponse(body?: FournisseurDTO): __Observable<__StrictHttpResponse<FournisseurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/fournisseur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enresitrer ou  modifier une fournisseur
   * @param body undefined
   * @return l'objet fournisseur cree / modifie
   */
  save(body?: FournisseurDTO): __Observable<FournisseurDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as FournisseurDTO)
    );
  }

  /**
   * Cette methode permet de supprimer une fournisseur par ID
   * @param idFournisseur undefined
   * @return la fournisseur a ete supprimer
   */
  deleteResponse(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/fournisseur/delete/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer une fournisseur par ID
   * @param idFournisseur undefined
   * @return la fournisseur a ete supprimer
   */
  delete(idFournisseur: number): __Observable<FournisseurDTO> {
    return this.deleteResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDTO)
    );
  }

  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param idFournisseur undefined
   * @return la fournisseur a ete trouver dans la BDD
   */
  findByIdResponse(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/fournisseur/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param idFournisseur undefined
   * @return la fournisseur a ete trouver dans la BDD
   */
  findById(idFournisseur: number): __Observable<FournisseurDTO> {
    return this.findByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDTO)
    );
  }

  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param nom undefined
   * @return la fournisseur a ete trouver dans la BDD
   */
  findByNomResponse(nom: string): __Observable<__StrictHttpResponse<FournisseurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/fournisseur/${nom}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher d'une facture par son ID
   * @param nom undefined
   * @return la fournisseur a ete trouver dans la BDD
   */
  findByNom(nom: string): __Observable<FournisseurDTO> {
    return this.findByNomResponse(nom).pipe(
      __map(_r => _r.body as FournisseurDTO)
    );
  }
}

module FournisseurService {
}

export { FournisseurService }
