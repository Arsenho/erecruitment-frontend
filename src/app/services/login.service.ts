import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent){
      errorMessage = `Erreur cote client:\n Message Erreur: ${error.error.message}`
    }else{
      errorMessage = `Erreur cote serveur:\n Status Erreur: ${error.status}\n
        Message Erreur: ${error.message}`
    }
    return throwError(errorMessage)
  }

  login(user): Observable<any> {
    return this.http.post(
      '/api/login/',
      user,
      {headers: this.httpHeaders}
    )
  }

  logout(): Observable<any> {
    return this.http.get(
      '/api/logout/',
      {headers: this.httpHeaders}
    ).pipe(
      catchError(this.handleError)
    )
  }

  createUser(user): Observable<any> {
    return this.http.post(
      '/api/mini-users/',
      user,
      {headers: this.httpHeaders}
    ).pipe(
      catchError(this.handleError)
    )
  }

  createCandidate(user): Observable<any> {
    return this.http.post(
      '/api/mini-candidates/',
      user,
      {headers: this.httpHeaders}
    ).pipe(
      catchError(this.handleError)
    )
  }

  createEmployer(user): Observable<any> {
    return this.http.post(
      '/api/mini-employers/',
      user,
      {headers: this.httpHeaders}
    ).pipe(
      catchError(this.handleError)
    )
  }
}
