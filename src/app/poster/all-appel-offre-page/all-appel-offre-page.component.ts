import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-all-appel-offre-page',
  templateUrl: './all-appel-offre-page.component.html',
  styleUrls: ['./all-appel-offre-page.component.css']
})
export class AllAppelOffrePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //show hide case studies as needed using filters
    $(".tv-filter-tm li").click(function () {
      var $filterButton = $(this);
      $(".tv-filter-tm li").removeClass("active");
      $filterButton.addClass("active");
      var $data = $filterButton.parent().parent().parent().parent().parent().find(".tv-case-studies");
      var $filter,$outerFilter;
      if ($filterButton.attr("id") === "filter__All") {
          $data.find('.tv-case-study').removeClass("tv-case-study-show");
          $data.find('.tv-case-study').addClass("tv-case-study-hide");

          $filter = $data.find('.tv-case-study');

          $filter.removeClass("tv-case-study-hide");
          setTimeout(function () { $filter.addClass("tv-case-study-show"); },20 );

        //  $filter.slideDown(800);
      } else {
          $filter = $data.find('.tv-case-study[data-category=' + $filterButton.attr("data-category") + ']');
          $data.find('.tv-case-study').removeClass("tv-case-study-show");
          $data.find('.tv-case-study').addClass("tv-case-study-hide");

          $filter.removeClass("tv-case-study-hide");
          setTimeout(function () { $filter.addClass("tv-case-study-show"); },20 );
      }


  });


  }

}
