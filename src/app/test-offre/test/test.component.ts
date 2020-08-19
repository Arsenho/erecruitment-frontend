import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TestService } from '../../services/test.service';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  offer_id = 1
  test_question = {id: -1, text: ""}
  test_question_solutions = [
    {id: -1, text: ""}
  ]
  evalution = {
    question: null,
    answer: null
  }
  end_message = ""
  constructor(private testService: TestService,
    private router: Router) {
    this.take_test()
  }

  take_test(){
    this.testService.getTakeTest(this.offer_id).subscribe(
      (data: any) => {
        this.test_question = data.question
        this.test_question_solutions = data.solutions
        console.log(this.test_question_solutions);

      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )
  }

  getNextQuestion(){
    let formData = new FormData()
    formData.append('question', this.evalution.question.toString())
    formData.append('answer', this.evalution.answer.toString())
    this.testService.answerTestQuestions(this.offer_id, formData).subscribe(
      (data: any) => {
        console.log(data);
        if (data.finish == true){
          this.evalution = {
            question: -1,
            answer: -1
          }
          this.getNextQuestion()
        }
        if(data.all_finish == true){
          this.end_message = "Merci d'avoir pris part a cette evaluation. \
          Nous vous contacterons tres bientot"
        }else{
          this.test_question = data.question
          this.test_question_solutions = data.solutions
          this.router.navigate(['/test'])
        }
      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )
  }

  get_my_answer(event, solution){
    console.log(solution.id);
    if (event.target.checked){
      this.evalution = {
        question: this.test_question.id,
        answer: solution.id
      }
      console.log(this.evalution);

    }else{

    }
  }



  ngOnInit(): void {
    $('.next-btn1').click(function () {
      $('.tab-pane').hide();
      $('#step2').fadeIn(1000);
    });
    $('.next-btn2').click(function () {
      $('.tab-pane').hide();
      $('#step3').fadeIn(1000);
    });
    $('.next-btn3').click(function () {
      $('.tab-pane').hide();
      $('#step4').fadeIn(1000);
    });
    $('.next-btn4').click(function () {
      $('.tab-pane').hide();
      $('#step5').fadeIn(1000);
    });

    $('.submit-btn').click(function () {
      $('#loader').show();
      setTimeout(function () {
        $('#booking-form').html(
          "<h2><h2>Votre test s'est acheve.Vous serez notifie tres bientot pour la communication de votre resultat !)!).</h2>"
        );
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
        seconds = diff % 60 | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (diff <= 0) {
          //une fois que le delai est atteint
          start = Date.now() + 1000;
          $('#booking-form').html(
            "<h2>Votre test s'est acheve.Vous serez notifie tres bientot pour la communication de  votre resultat !).</h2>"
          );
        }
      }

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
