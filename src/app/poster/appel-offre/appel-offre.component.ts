import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.css']
})
export class AppelOffreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  

$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  
  

  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });
  

  $(document).ready(function() {

  
    // when the state dropdown changes
    $( "#country").change(function() {
      
      // check country
      if ( $(this).val() == "aucune") {
        // land of the free
        $(".aucune").show();
        $(".choix").hide();
        // clear the values in case they picked the wrong country
        $(".choix select").val("");
      } else if ( $(this).val() == "chaussure" ) {
        // oh canada
        $(".aucune").hide();
        $(".choix").show();
        // clear the values in case they picked the wrong country
        $(".aucune select").val("");
      }   
    
    });  
  // document ready  
  });




  $(document).ready(function() {

  
    // quand le choix du test change
    $( "#test").change(function() {
      
      // verifier le test
      if ( $(this).val() == "nouveau") {
        // nouveau test
        $(".nouveauTest").show();
        $(".config_test").show();
        
      } else if( $(this).val() == "aucun"){
        $(".config_test").hide();
        $(".nouveauTest").hide();
      } else{
        $(".config_test").show();
      }
    
    });  
  // document pret  
  });
 
  

    
  }

}
