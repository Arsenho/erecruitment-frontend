import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { OfferService } from 'src/app/services/offer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TestService } from 'src/app/services/test.service';
@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.css']
})
export class AppelOffreComponent implements OnInit {
  logged_user
  offer
  response
  error = ''
  constructor(private router: Router,
    private userService: UserService,
    private offerService: OfferService,
    private testService: TestService) {
      this.getAllTests()
      this.offer = {
        offer_type: ''
      }
      this.response = {
        message: '',
        success: {message: ''}
      }
  }

  get_logged_user(){
    this.userService.get_logged_user().subscribe(
      (data: any) => {
        this.logged_user = data
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        this.logged_user.id = -1
      }
    )
  }

  getAllTests(){
    this.testService.getTests().subscribe(
      (data: any) => {
        console.log(data)
      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )
  }

  create() {
    let formData = new FormData()
    formData.append('offer_type', this.offer.offer_type)
    formData.append('title', this.offer.title)
    formData.append('begins', this.offer.begins)
    formData.append('description', this.offer.description)
    formData.append('level', this.offer.level)
    formData.append('experience', this.offer.experience)
    formData.append('post', this.offer.poste)
    formData.append('competence', this.offer.competence)
    formData.append('salary', this.offer.salary)
    formData.append('contract_type', this.offer.contract_type)
    console.log(formData);

    this.offerService.createOffer(formData).subscribe(
      (data: any) => {
        console.log(data)
        this.response.image_url = "https://i.imgur.com/GwStPmg.png"
        this.response.success.message = 'Success !'
        this.response.success.flag = true
        this.response.message = "Continuer !"
      },
      (err: HttpErrorResponse) => {
        console.error(err.status);
        if (err.status == 401){
          console.log(err.error);
          this.response = err.error
          this.response.image_url = "https://img.pngio.com/free-red-letter-x-icon-download-red-letter-x-icon-png-of-letter-x-256_256.png"
        }else if (err.status == 400){
          console.log(err.error);
          this.response.success.message = 'Failed !'
          this.response.success.flag = false
          this.response.message = err.error
          this.response.image_url = "https://img.pngio.com/free-red-letter-x-icon-download-red-letter-x-icon-png-of-letter-x-256_256.png"
        }
      }
    )
  }

  next() {
    console.log(this.offer);

  }

  ngOnInit(): void {
    $(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;

      setProgressBar(current);

      $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              'display': 'none',
              'position': 'relative'
            });
            next_fs.css({ 'opacity': opacity });
          },
          duration: 500
        });
        setProgressBar(++current);
      });

      $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              'display': 'none',
              'position': 'relative'
            });
            previous_fs.css({ 'opacity': opacity });
          },
          duration: 500
        });
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {



      }

      $(".submit").click(function () {
        return false;
      })

    });


    $(document).ready(function () {



      $("#companie").change(function () {

        if ($(this).val() == "Particulier") {

          $(".particulier").show();
          $(".nouvelle").hide();

        } else if ($(this).val() == "Nouvelle") {

          $(".nouvelle").show();
          $(".particulier").hide();


        } else {

          $(".nouvelle").hide();
          $(".particulier").hide();
        }

      });
      // document ready
    });




    $(document).ready(function () {


      // quand le choix du test change
      $("#test").change(function () {

        // verifier le test
        if ($(this).val() == "nouveau") {
          // nouveau test
          $(".nouveauTest").show();
          $(".config_test").show();

        } else if ($(this).val() == "aucun") {
          $(".config_test").hide();
          $(".nouveauTest").hide();
        } else {
          $(".config_test").show();
        }

      });
      // document pret
    });
  }

}
