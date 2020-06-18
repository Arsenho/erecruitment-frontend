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
  $(document).ready(function(){

    var list = $(".list li");
    var numToShow = 3;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function(){
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
          button.hide();
        }
    });

});
 
 // SEARCH FUNCTION
var btsearch = {
	init: function(search_field, searchable_elements, searchable_text_class) {
		$(search_field).keyup(function(e){
			e.preventDefault();
			var query = $(this).val().toString().toLowerCase();
			if(query){
				// loop through all elements to find match
				$.each($(searchable_elements), function(){
					var title = $(this).find(searchable_text_class).text().toLowerCase();
					if(title.indexOf(query) == -1){
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			} else {
				// empty query so show everything
				$(searchable_elements).show();
			}
		});
	}
}

// INIT
$(function(){
  // USAGE: btsearch.init(('search field element', 'searchable children elements', 'searchable text class');
  btsearch.init('#search_field', '#demonames li', '.demoname');
});

  }


}
