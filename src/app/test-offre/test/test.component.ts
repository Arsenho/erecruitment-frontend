import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  

$(".next-btn1").click(function() {
 
      $(".tab-pane").hide();
      $("#step2").fadeIn(1000);
  
    
 });
$(".next-btn2").click(function() {

      $(".tab-pane").hide();
      $("#step3").fadeIn(1000);
    

});
$(".next-btn3").click(function() {

  $(".tab-pane").hide();
  $("#step4").fadeIn(1000);

});
$(".next-btn4").click(function() {

  $(".tab-pane").hide();
  $("#step5").fadeIn(1000);


});

$(".submit-btn").click(function() {

    $("#loader").show();
     setTimeout(function(){
       $("#booking-form").html("<h2><h2>Votre test s'est acheve.Vous serez notifie tres bientot pour la communication de votre resultat !)!).</h2>");
     }, 1000);
    return false;

});

function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
    
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // conversions
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          //une fois que le delai est atteint
          start = Date.now() + 1000;
          $("#booking-form").html("<h2>Votre test s'est acheve.Vous serez notifie tres bientot pour la communication de  votre resultat !).</h2>");
      }
  };
  
  timer();
  setInterval(timer, 1000);
}

window.onload = function () {
  //nombre de minutes dedies a un test
  var nbrMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(nbrMinutes, display);

  
};


  }

}
