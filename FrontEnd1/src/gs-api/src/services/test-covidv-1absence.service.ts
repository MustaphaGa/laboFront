/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AbsenceDTO } from '../models/absence-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1absenceService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/absence/all';
  static readonly savePath = '/testCovid/v1/absence/create';
  static readonly deletePath = '/testCovid/v1/absence/delete/{idAbsence}';
  static readonly findByMotifPath = '/testCovid/v1/absence/filter{motif}';
  static readonly findByIdPath = '/testCovid/v1/absence/{idAbsence}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des absences qui existent dans la BDD
   * @return la liste des absneces / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AbsenceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/absence/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AbsenceDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des absences qui existent dans la BDD
   * @return la liste des absneces / une liste vide
   */
  findAll(): __Observable<Array<AbsenceDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AbsenceDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un absence
   * @param body undefined
   * @return l'objet absence cree / modifie
   */
  saveResponse(body?: AbsenceDTO): __Observable<__StrictHttpResponse<AbsenceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/absence/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbsenceDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un absence
   * @param body undefined
   * @return l'objet absence cree / modifie
   */
  save(body?: AbsenceDTO): __Observable<AbsenceDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as AbsenceDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un absence par ID
   * @param idAbsence undefined
   * @return absence a ete supprimer
   */
  deleteResponse(idAbsence: number): __Observable<__StrictHttpResponse<AbsenceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/absence/delete/${idAbsence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbsenceDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un absence par ID
   * @param idAbsence undefined
   * @return absence a ete supprimer
   */
  delete(idAbsence: number): __Observable<AbsenceDTO> {
    return this.deleteResponse(idAbsence).pipe(
      __map(_r => _r.body as AbsenceDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un absence par son SPECIALITE
   * @param motif undefined
   * @return absence a ete trouver dans la BDD
   */
  findByMotifResponse(motif: string): __Observable<__StrictHttpResponse<AbsenceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/absence/filter${motif}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbsenceDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un absence par son SPECIALITE
   * @param motif undefined
   * @return absence a ete trouver dans la BDD
   */
  findByMotif(motif: string): __Observable<AbsenceDTO> {
    return this.findByMotifResponse(motif).pipe(
      __map(_r => _r.body as AbsenceDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un absence par son ID
   * @param idAbsence undefined
   * @return absence a ete trouver dans la BDD
   */
  findByIdResponse(idAbsence: number): __Observable<__StrictHttpResponse<AbsenceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/absence/${idAbsence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbsenceDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un absence par son ID
   * @param idAbsence undefined
   * @return absence a ete trouver dans la BDD
   */
  findById(idAbsence: number): __Observable<AbsenceDTO> {
    return this.findByIdResponse(idAbsence).pipe(
      __map(_r => _r.body as AbsenceDTO)
    );
  }
}

module TestCovidv1absenceService {
}

export { TestCovidv1absenceService }
