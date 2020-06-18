import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service"

@Injectable({
  providedIn: 'root'
})
export class OfferService {
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

  createOffer(offer: FormData): Observable<any> {
    offer.append('csrfmiddlewaretoken', this.crfsToken)
    return this.http.post(
      '/api/offers/',
      offer,
      //{headers: this.httpHeaders}
    )
  }

  getAllOffer(): Observable<any> {
    return this.http.get(
      '/api/offers/',
      {headers: this.httpHeaders}
    )
  }

  getOneOffer(id): Observable<any> {
    return this.http.get(
      `/api/offers/${id}/`,
      {headers: this.httpHeaders}
    )
  }

}
