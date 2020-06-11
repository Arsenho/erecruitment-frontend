import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
import * as $ from 'jquery'


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  title = 'simple pagination demo';
  collection = [];
  constructor(){
    for(let i=1;i<=100;i++){
      let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
      this.collection.push(Obj);
    }
  }

  ngOnInit(): void {
   
  }

}

