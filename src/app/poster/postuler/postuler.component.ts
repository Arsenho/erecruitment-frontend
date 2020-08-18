import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
