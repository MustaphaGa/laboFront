/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReservationDTO } from '../models/reservation-dto';
@Injectable({
  providedIn: 'root',
})
class ReservationService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/reservation/all';
  static readonly savePath = '/testCovid/v1/reservation/create';
  static readonly deletePath = '/testCovid/v1/reservation/delete/{idReservation}';
  static readonly findByDateReservationPath = '/testCovid/v1/reservation/filter{dateReservation}';
  static readonly findByIdPath = '/testCovid/v1/reservation/{idReservation}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des reservation qui existent dans la BDD
   * @return la liste des reservation / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ReservationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/reservation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservationDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des reservation qui existent dans la BDD
   * @return la liste des reservation / une liste vide
   */
  findAll(): __Observable<Array<ReservationDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ReservationDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un reservation
   * @param body undefined
   * @return l'objet reservation cree / modifie
   */
  saveResponse(body?: ReservationDTO): __Observable<__StrictHttpResponse<ReservationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/reservation/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un reservation
   * @param body undefined
   * @return l'objet reservation cree / modifie
   */
  save(body?: ReservationDTO): __Observable<ReservationDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ReservationDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un reservation par ID
   * @param idReservation undefined
   * @return reservation a ete supprimer
   */
  deleteResponse(idReservation: number): __Observable<__StrictHttpResponse<ReservationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/reservation/delete/${idReservation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un reservation par ID
   * @param idReservation undefined
   * @return reservation a ete supprimer
   */
  delete(idReservation: number): __Observable<ReservationDTO> {
    return this.deleteResponse(idReservation).pipe(
      __map(_r => _r.body as ReservationDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un reservation par date de Reservation
   * @param dateReservation undefined
   * @return la reservation a ete trouver dans la BDD
   */
  findByDateReservationResponse(dateReservation: string): __Observable<__StrictHttpResponse<ReservationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/reservation/filter${dateReservation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un reservation par date de Reservation
   * @param dateReservation undefined
   * @return la reservation a ete trouver dans la BDD
   */
  findByDateReservation(dateReservation: string): __Observable<ReservationDTO> {
    return this.findByDateReservationResponse(dateReservation).pipe(
      __map(_r => _r.body as ReservationDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un reservation par son ID
   * @param idReservation undefined
   * @return la reservation a ete trouver dans la BDD
   */
  findByIdResponse(idReservation: number): __Observable<__StrictHttpResponse<ReservationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/reservation/${idReservation}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un reservation par son ID
   * @param idReservation undefined
   * @return la reservation a ete trouver dans la BDD
   */
  findById(idReservation: number): __Observable<ReservationDTO> {
    return this.findByIdResponse(idReservation).pipe(
      __map(_r => _r.body as ReservationDTO)
    );
  }
}

module ReservationService {
}

export { ReservationService }
