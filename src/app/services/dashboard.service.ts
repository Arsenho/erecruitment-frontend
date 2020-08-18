import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  offer_id;
  constructor(private http: HttpClient) { }

  getNumParticipantPerPeriod(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/appliance_per_date?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getNumParticipantPerTest(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/candidates-per-test?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getNumSuccessPerTestForOffer(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/success-per-test?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getNumFailurePerTestForOffer(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/failure-per-test?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getAnsweredQuestionsTestForOffer(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/participants-for-test?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getParticipantPercentagePerTest(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/participant-percentage-per-test?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }

  getBestProfilesForOffer(offer_id): Observable<any> {
    return this.http.get(
      '/api/dashboard/succeeded_all_tests?offer_id=' + offer_id,
      {headers: this.httpHeaders}
    )
  }
}
