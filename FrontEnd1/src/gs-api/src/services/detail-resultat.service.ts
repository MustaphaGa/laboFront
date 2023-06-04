/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DetailResultatDTO } from '../models/detail-resultat-dto';
@Injectable({
  providedIn: 'root',
})
class DetailResultatService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/detailResultat/all';
  static readonly savePath = '/testCovid/v1/detailResultat/create';
  static readonly delectePath = '/testCovid/v1/detailResultat/delete/{idDetailResultat}';
  static readonly findByIdPath = '/testCovid/v1/detailResultat/{idDetailResultat}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des detail Resultats qui existent dans la BDD
   * @return la liste des biologiste / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<DetailResultatDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/detailResultat/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DetailResultatDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des detail Resultats qui existent dans la BDD
   * @return la liste des biologiste / une liste vide
   */
  findAll(): __Observable<Array<DetailResultatDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<DetailResultatDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou  modifier un detailResultat
   * @param body undefined
   * @return l'objet detail Resultat cree / modifie
   */
  saveResponse(body?: DetailResultatDTO): __Observable<__StrictHttpResponse<DetailResultatDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/detailResultat/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DetailResultatDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou  modifier un detailResultat
   * @param body undefined
   * @return l'objet detail Resultat cree / modifie
   */
  save(body?: DetailResultatDTO): __Observable<DetailResultatDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as DetailResultatDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un detail Resultat par ID
   * @param idDetailResultat undefined
   * @return detail Resultat a ete supprimer
   */
  delecteResponse(idDetailResultat: number): __Observable<__StrictHttpResponse<DetailResultatDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/detailResultat/delete/${idDetailResultat}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DetailResultatDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un detail Resultat par ID
   * @param idDetailResultat undefined
   * @return detail Resultat a ete supprimer
   */
  delecte(idDetailResultat: number): __Observable<DetailResultatDTO> {
    return this.delecteResponse(idDetailResultat).pipe(
      __map(_r => _r.body as DetailResultatDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un detail Resultat par son ID
   * @param idDetailResultat undefined
   * @return la detail Resultat a ete trouver dans la BDD
   */
  findByIdResponse(idDetailResultat: number): __Observable<__StrictHttpResponse<DetailResultatDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/detailResultat/${idDetailResultat}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DetailResultatDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un detail Resultat par son ID
   * @param idDetailResultat undefined
   * @return la detail Resultat a ete trouver dans la BDD
   */
  findById(idDetailResultat: number): __Observable<DetailResultatDTO> {
    return this.findByIdResponse(idDetailResultat).pipe(
      __map(_r => _r.body as DetailResultatDTO)
    );
  }
}

module DetailResultatService {
}

export { DetailResultatService }
