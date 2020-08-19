import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  cv_file = null
  offer_id = -1
  files = []
  form: FormGroup
  constructor(private offeService: OfferService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  apply(){
    let formData = new FormData()
    formData.append('cv', this.cv_file.data)
    console.log(this.cv_file.data);

    this.offeService.applyForOffer(formData).subscribe(
      (data: any) => {
        if (data.success == true){
          this.router.navigate(['/test'])
        }
      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )

  }

  private upload() {
    this.fileInput.nativeElement.value = '';
    this.files.forEach(file => {
      this.cv_file = file
      this.form.get('fichier').setValue(file)
    });
  }

  onClick() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
        for (let index = 0; index < fileInput.files.length; index++)
        {
          const file = fileInput.files[index];
          this.files.push({ data: file});
        }
        this.upload();
    };
    fileInput.click();
   /*$("button").hide();*/
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titre: new FormControl(''),
      type_doc: [],
      fichier: [''],
      description: ''
    });

    $(document).ready(function(){

      $('#pass1').focus(afficheMessage);
      $('#pass1').blur(supprMessage);
      function afficheMessage(){
        var help = $(this).data("help");
        //insérer le message dans .message
        $('.message').html(help);
      }

      function supprMessage(){
        $('.message').empty();
      }
    });


  }


}
