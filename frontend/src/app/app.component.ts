import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  interviews: Array<any>;

  constructor(private http: HttpClient, private _apiService: ApiService) {
    this.interviews = [];
  }

  ngOnInit() {
    this.interviews = this._apiService.getInterviews();
  }
  

}
