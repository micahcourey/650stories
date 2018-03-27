import { Component, OnInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import 'rxjs/add/operator/map';
import * as highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'app';
  interviews: Array<any>;
  selectionShare: any;
  showNav = false;
  showMobileNav = false;
  scrollIndex = 0;
  previousHeight = 0;
  animate = '';
  triggerAnimation = false;

  constructor(private http: HttpClient, private _apiService: ApiService, private router: Router) {
    this.interviews = [];
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._apiService.getInterviews().then((interviews: any) => {
      console.log('interviews', interviews)
      this.interviews = interviews;

    });
    this.selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
    });
    this.selectionShare.init();
  }

  ngOnDestroy() {

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav && this.scrollIndex > 0) {
      this.showNav = true;
      this.showMobileNav = true;
    }
    const height = event.path[0].documentElement.scrollTop;
    if (height === 0) {
      this.showMobileNav = false;
    } else if (this.previousHeight > height) {
      this.showMobileNav = true;
    } else {
      this.showMobileNav = false;
    }
    this.previousHeight = event.path[0].documentElement.scrollTop;
    this.scrollIndex++;
  }

}
