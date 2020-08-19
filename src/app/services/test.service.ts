import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  crfsToken
  httpHeaders
  constructor(private http: HttpClient,
    private cookieService: CookieService) {
    this.crfsToken = this.getToken()
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.crfsToken
    })
  }

  getToken() {
    return this.cookieService.get('csrftoken')
  }

  getTests(): Observable<any>{
    return this.http.get(
      '/api/tests/',
      {headers: this.httpHeaders}
    )
  }

  getTakeTest(offer_id): Observable<any>{
    return this.http.get(
      `/api/take/?offer_id=${offer_id}`,
      {headers: this.httpHeaders}
    )
  }

  answerTestQuestions(offer_id, evaluation: FormData): Observable<any>{
    evaluation.append('csrfmiddlewaretoken', this.crfsToken)
    return this.http.post(
      `/api/take/?offer_id=${offer_id}`,
      evaluation,
      //{headers: this.httpHeaders}
    )
  }
}
