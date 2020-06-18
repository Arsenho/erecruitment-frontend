import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

$(function () {
  $("#btnAdd").bind("click", function () {
      var div = $("<tr />");
      div.html(GetDynamicTextBox(""));
      $("#TextBoxContainer").append(div);
  });
  $("body").on("click", ".remove", function () {
      $(this).closest("tr").remove();
  });
});
function GetDynamicTextBox(value) {
  return '<td><select name="" class="form-control"><option> Select</option><option>Rapidite</option><option>psycho-technique</option></select></td>'+'<td><input name = "DynamicTextBox" type="text" value = "' + value + '" class="form-control" /></td>' + '<td><input type="text" placeholder="1" name="un"><br/><br/><input type="text" placeholder="2" name="un"><br/><br/><input placeholder="3" type="text" name="un"></td>' + '<td><input type="checkbox" name="une"/><br/><br/><input type="checkbox" name="deux"/><br/><br/><input type="checkbox" name="trois"/></td>' + '<td><textarea name = "DynamicTextBox" type="text" value = "' + value + '" ></textarea></td>' + '<td><button type="button" class="btn btn-danger remove"><mat-icon class="glyphicon glyphicon-remove-sign">delete</mat-icon></button></td>'
}

  }

}
