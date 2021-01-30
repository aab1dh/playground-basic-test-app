import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { share } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() }).pipe(share())
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


