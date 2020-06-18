import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

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
    
      
       
        $( "#companie").change(function() {
       
          if ( $(this).val() == "Particulier") {
          
            $(".particulier").show();
            $(".nouvelle").hide();
          
          } else if ( $(this).val() == "Nouvelle" ) {
          
            $(".nouvelle").show();
            $(".particulier").hide();
           
          
          }else{
    
            $(".nouvelle").hide();
            $(".particulier").hide();
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
