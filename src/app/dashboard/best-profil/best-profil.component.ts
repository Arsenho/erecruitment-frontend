import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-best-profil',
  templateUrl: './best-profil.component.html',
  styleUrls: ['./best-profil.component.css']
})
export class BestProfilComponent implements OnInit {
  offer_id = 0
  best_profiles = []
  offers = []
  constructor(private dashboardService: DashboardService,
    private router: Router, private userService: UserService,
    private offerService: OfferService) {
      this.getAllOffers()
    }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#bestProf').DataTable();
  } );
  }

  allBestProfiles(){
    this.dashboardService.getBestProfilesForOffer(this.offer_id).subscribe(
      (data: any) => {
        this.best_profiles = data
      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )
  }

  set_offer_id(offer_id){
    console.log("offre " + offer_id);

    this.offer_id = offer_id
    if (this.offer_id != 0){
      this.allBestProfiles()
    }
    this.router.navigate(['/dashboard'])
  }

  reset_offer_id(){
    this.offer_id = 0
    if (this.offer_id != 0){
      this.allBestProfiles()
    }
    this.router.navigate(['/dashboard'])
  }

is_auth(groups) {
  for (let group of groups){
    if (group == 2 || group == 3){
      return true
    }
  }
  return false
}

  getAllOffers(){
    this.userService.get_logged_user().subscribe(
      (data: any) => {
        console.log(data.groups)
        if (this.is_auth(data.groups)){
          this.offerService.getOfferEmployer(data.id).subscribe(
            (data: any) => {
              console.log(data);

              this.offers = data
            },
            (err: HttpErrorResponse) => {
              console.error(err);

            }
          )
        }else {
          console.log("you are not an employer");

        }

      },
      (err) => {
        console.error(err);
        //this.employer_id.id = -1
      }
    )
  }

}
