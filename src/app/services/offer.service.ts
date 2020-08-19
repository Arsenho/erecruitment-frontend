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
  offer_id = -1
  constructor(private http: HttpClient,
    private cookieService: CookieService) {
      this.crfsToken = this.getToken()
      this.httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.crfsToken
      })
  }

  setOfferId(offer){
    this.offer_id = offer.id
  }

  getOfferId(){
    return this.offer_id
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

  applyForOffer(application: FormData): Observable<any> {
    application.append('csrfmiddlewaretoken', this.crfsToken)
    application.append('offer', this.offer_id.toString())
    console.log(this.offer_id);

    return this.http.post(
      '/api/applies/',
      application,
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

  getOfferCategory(): Observable<any> {
    return this.http.get(
      '/api/offers/categories/',
      {headers: this.httpHeaders}
    )
  }

  getOfferEmployer(employer_id): Observable<any> {
    return this.http.get(
      '/api/offers/?published_by=' + employer_id,
      {headers: this.httpHeaders}
    )
  }

}
