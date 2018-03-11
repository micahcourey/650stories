import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet class="router-outlet"></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  interviews: Array<any>;
  selectionShare: any;
  showNav: boolean = false;

  constructor(private http: HttpClient, private _apiService: ApiService) {
    this.interviews = [];

  }

  ngOnInit() {
    // this.interviews = this._apiService.getInterviews();
    this.selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
    });
    
    this.selectionShare.init();
  }
  
  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav) {
      this.showNav = true;
    }
  }

}
