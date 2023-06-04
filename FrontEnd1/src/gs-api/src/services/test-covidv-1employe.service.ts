/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EmployeDTO } from '../models/employe-dto';
@Injectable({
  providedIn: 'root',
})
class TestCovidv1employeService extends __BaseService {
  static readonly findAllPath = '/testCovid/v1/employe/all';
  static readonly savePath = '/testCovid/v1/employe/create';
  static readonly deletePath = '/testCovid/v1/employe/delete/{idEmploye}';
  static readonly findByEmailPath = '/testCovid/v1/employe/filter{email}';
  static readonly findByIdPath = '/testCovid/v1/employe/{idEmploye}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de rechercher et renvoyer la listes des employes qui existent dans la BDD
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<EmployeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/employe/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EmployeDTO>>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher et renvoyer la listes des employes qui existent dans la BDD
   * @return successful operation
   */
  findAll(): __Observable<Array<EmployeDTO>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<EmployeDTO>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un employe
   * @param body undefined
   * @return l'objet employe cree / modifie
   */
  saveResponse(body?: EmployeDTO): __Observable<__StrictHttpResponse<EmployeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/testCovid/v1/employe/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDTO>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un employe
   * @param body undefined
   * @return l'objet employe cree / modifie
   */
  save(body?: EmployeDTO): __Observable<EmployeDTO> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as EmployeDTO)
    );
  }

  /**
   * Cette methode permet de supprimer un employe par ID
   * @param idEmploye undefined
   * @return employe a ete supprimer
   */
  deleteResponse(idEmploye: number): __Observable<__StrictHttpResponse<EmployeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/testCovid/v1/employe/delete/${idEmploye}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un employe par ID
   * @param idEmploye undefined
   * @return employe a ete supprimer
   */
  delete(idEmploye: number): __Observable<EmployeDTO> {
    return this.deleteResponse(idEmploye).pipe(
      __map(_r => _r.body as EmployeDTO)
    );
  }

  /**
   * Cette methode permet de rechercher un employe par son email
   * @param email undefined
   * @return la employe a ete trouver dans la BDD
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<EmployeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/employe/filter${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher un employe par son email
   * @param email undefined
   * @return la employe a ete trouver dans la BDD
   */
  findByEmail(email: string): __Observable<EmployeDTO> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as EmployeDTO)
    );
  }

  /**
   * Cette methode permet de rechercher  un employe par son ID
   * @param idEmploye undefined
   * @return la employe a ete trouver dans la BDD
   */
  findByIdResponse(idEmploye: number): __Observable<__StrictHttpResponse<EmployeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/testCovid/v1/employe/${idEmploye}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDTO>;
      })
    );
  }
  /**
   * Cette methode permet de rechercher  un employe par son ID
   * @param idEmploye undefined
   * @return la employe a ete trouver dans la BDD
   */
  findById(idEmploye: number): __Observable<EmployeDTO> {
    return this.findByIdResponse(idEmploye).pipe(
      __map(_r => _r.body as EmployeDTO)
    );
  }
}

module TestCovidv1employeService {
}

export { TestCovidv1employeService }
