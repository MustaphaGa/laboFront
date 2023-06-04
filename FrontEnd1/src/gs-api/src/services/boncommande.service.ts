/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BonCommandeDTO } from '../models/bon-commande-dto';
@Injectable({
  providedIn: 'root',
})
class BoncommandeService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/boncommande/all';
  static readonly savePath = '/testCovid/v1/boncommande/create';
  static readonly delectePath = '/testCovid/v1/boncommande/delete/{idBonCommande}';
  static readonly findByIdPath = '/testCovid/v1/boncommande/filter{idBonCommande}';
  static readonly findByDateAnalysePath = '/testCovid/v1/boncommande/{dateCommande}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer boncommande qui existent dans la BDD
   * @return la liste boncommande/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<BonCommandeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/boncommande/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BonCommandeDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer boncommande qui existent dans la BDD
   * @return la liste boncommande/ une liste vide
   */
  findAll(): __Observable<Array<BonCommandeDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<BonCommandeDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer oumodifier bonncommande
   * @param body undefined
   * @return l'objet boncommande cree / modifie
   */
  saveResponse(body?: BonCommandeDTO): __Observable<__StrictHttpResponse<BonCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/boncommande/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BonCommandeDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer oumodifier bonncommande
   * @param body undefined
   * @return l'objet boncommande cree / modifie
   */
  save(body?: BonCommandeDTO): __Observable<BonCommandeDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as BonCommandeDTO)
    );
  }

  /**
   * Cette methode permet de supprimer boncommande par ID
   * @param idBonCommande undefined
   * @return boncommandea ete supprimer
   */
  delecteResponse(idBonCommande: number): __Observable<__StrictHttpResponse<BonCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/boncommande/delete/${idBonCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BonCommandeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer boncommande par ID
   * @param idBonCommande undefined
   * @return boncommandea ete supprimer
   */
  delecte(idBonCommande: number): __Observable<BonCommandeDTO> {
    return this.delecteResponse(idBonCommande).pipe(
      __map(_r => _r.body as BonCommandeDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  boncommande par son ID
   * @param idBonCommande undefined
   * @return boncommandea ete trouver dans la BDD
   */
  findByIdResponse(idBonCommande: number): __Observable<__StrictHttpResponse<BonCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/boncommande/filter${idBonCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BonCommandeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  boncommande par son ID
   * @param idBonCommande undefined
   * @return boncommandea ete trouver dans la BDD
   */
  findById(idBonCommande: number): __Observable<BonCommandeDTO> {
    return this.findByIdResponse(idBonCommande).pipe(
      __map(_r => _r.body as BonCommandeDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un boncommande par son date
   * @param dateCommande undefined
   * @return boncommande a ete trouver dans la BDD
   */
  findByDateAnalyseResponse(dateCommande: string): __Observable<__StrictHttpResponse<BonCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/boncommande/${dateCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BonCommandeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un boncommande par son date
   * @param dateCommande undefined
   * @return boncommande a ete trouver dans la BDD
   */
  findByDateAnalyse(dateCommande: string): __Observable<BonCommandeDTO> {
    return this.findByDateAnalyseResponse(dateCommande).pipe(
      __map(_r => _r.body as BonCommandeDTO)
    );
  }
}

module BoncommandeService {
}

export { BoncommandeService }
