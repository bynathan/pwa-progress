import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { EstablishmentsModel } from 'src/app/modules/establishments/models/establishments.model';
import { ResponseAPI } from '../models/response-api.model';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentsService {
  private readonly placesUrl = 'temrango-places/api';

  constructor(private httpClient: HttpClient) {}

  /**
   * @description Recuperar estabelecimentos da cidade
   * @param cityId Id da cidade
   * @returns Estabelecimentos
   */
  getEstablishments(cityId: number): Observable<ResponseAPI> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${this.placesUrl}/places`,
      {
        params: {
          cityId,
          page: 0,
          size: 20,
        },
      }
    );
  }

  /**
   * @description Recuperar detalhes de um estabelecimento
   * @param placeId Id do estabelecimento
   * @returns Detalhes do estabelecimento
   */
  getEstablishmentDetails(placeId: number): Observable<ResponseAPI> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${this.placesUrl}/places/${placeId}`
    );
  }
}
