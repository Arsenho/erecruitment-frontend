import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  httpHeaders = new HttpHeaders()
  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getTests(): Observable<any>{
    return this.http.get(
      '/api/tests/',
      {headers: this.httpHeaders}
    )
  }
}
