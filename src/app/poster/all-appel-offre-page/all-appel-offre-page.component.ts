import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as $ from 'jquery'
import { OfferService } from 'src/app/services/offer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TestService } from 'src/app/services/test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-appel-offre-page',
  templateUrl: './all-appel-offre-page.component.html',
  styleUrls: ['./all-appel-offre-page.component.css']
})
export class AllAppelOffrePageComponent implements OnInit, AfterContentInit {
  offers = [
    {
      title: '',
      description: '',
      offer_type: '',
      contract_type: '',
      level: '',
      experience: '',
      competence: '',
      salary: '',
      post: '',
      begins: Date().toString(),
      ends: Date().toString()
    }
  ]
  tests = []
  categories = []
  constructor(private offerService: OfferService,
    private testService: TestService,
    private router: Router) {
    this.getOffers()
    this.getOfferCategories()
  }

  go_to_apply(offer){
    console.log(offer);

    this.offerService.offer_id = offer.id
    this.router.navigate(['/postuler'])
  }

  getOffers() {
    this.offerService.getAllOffer().subscribe(
      (data: any) => {
        this.offers = data
        console.log(data);

      },
      (err: HttpErrorResponse) => {
        console.log(err.error)
      }
    )
  }

  getOfferCategories(){
    this.offerService.getOfferCategory().subscribe(
      (data: any) => {
        this.categories = data
        console.log(data);

      },
      (err: HttpErrorResponse) => {
        console.log(err.error)
      }
    )
  }

  getOfferByCategory(category){
    console.log(category);

  }

  getSelectedOffer(offer) {
    console.log(offer);

  }


  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  ngOnInit(): void {

  }


}
