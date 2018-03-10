import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  title = 'app';
  interviews: Array<any>;
  selectionShare: any;
  showNav: boolean = false;

  constructor(private _apiService: ApiService) {
    this.interviews = [];
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.interviews = this._apiService.getInterviews();
    this.selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
    });
    this.selectionShare.init();
    
  }

  getInterview() {
    
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav) {
      this.showNav = true;
    }
  }

}
