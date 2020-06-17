import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user
  private error
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {

  }

  getUser() {
    return this.user
  }

  setUser(user) {
    this.user = user
  }

  get_logged_user(): Observable<any> {
    return this.http.get(
      '/api/login/',
      {headers: this.httpHeaders}
    )
  }
}
