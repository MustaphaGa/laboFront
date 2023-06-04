/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BiologisteDTO } from '../models/biologiste-dto';
@Injectable({
  providedIn: 'root',
})
class BiologisteService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/biologiste/all';
  static readonly savePath = '/testCovid/v1/biologiste/create';
  static readonly delectePath = '/testCovid/v1/biologiste/delete/{idBiologiste}';
  static readonly findByCodeBiologistePath = '/testCovid/v1/biologiste/filter{codeBiologiste}';
  static readonly findByIdPath = '/testCovid/v1/biologiste/{idBiologiste}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des biologistes qui existent dans la BDD
   * @return la liste des biologiste / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<BiologisteDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/biologiste/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BiologisteDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des biologistes qui existent dans la BDD
   * @return la liste des biologiste / une liste vide
   */
  findAll(): __Observable<Array<BiologisteDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<BiologisteDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un biologiste
   * @param body undefined
   * @return l'objet biologiste cree / modifie
   */
  saveResponse(body?: BiologisteDTO): __Observable<__StrictHttpResponse<BiologisteDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/biologiste/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BiologisteDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un biologiste
   * @param body undefined
   * @return l'objet biologiste cree / modifie
   */
  save(body?: BiologisteDTO): __Observable<BiologisteDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as BiologisteDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un biologiste par ID
   * @param idBiologiste undefined
   * @return biologiste a ete supprimer
   */
  delecteResponse(idBiologiste: number): __Observable<__StrictHttpResponse<BiologisteDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/biologiste/delete/${idBiologiste}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BiologisteDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un biologiste par ID
   * @param idBiologiste undefined
   * @return biologiste a ete supprimer
   */
  delecte(idBiologiste: number): __Observable<BiologisteDTO> {
    return this.delecteResponse(idBiologiste).pipe(
      __map(_r => _r.body as BiologisteDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un biologiste par son CODE
   * @param codeBiologiste undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findByCodeBiologisteResponse(codeBiologiste: string): __Observable<__StrictHttpResponse<BiologisteDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/biologiste/filter${codeBiologiste}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BiologisteDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un biologiste par son CODE
   * @param codeBiologiste undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findByCodeBiologiste(codeBiologiste: string): __Observable<BiologisteDTO> {
    return this.findByCodeBiologisteResponse(codeBiologiste).pipe(
      __map(_r => _r.body as BiologisteDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un biologiste par son ID
   * @param idBiologiste undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findByIdResponse(idBiologiste: number): __Observable<__StrictHttpResponse<BiologisteDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/biologiste/${idBiologiste}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BiologisteDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un biologiste par son ID
   * @param idBiologiste undefined
   * @return la biologiste a ete trouver dans la BDD
   */
  findById(idBiologiste: number): __Observable<BiologisteDTO> {
    return this.findByIdResponse(idBiologiste).pipe(
      __map(_r => _r.body as BiologisteDTO)
    );
  }
}

module BiologisteService {
}

export { BiologisteService }
