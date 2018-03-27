import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimation', [
      
      transition( '* => *', [
        query(':enter,:leave', [
          style({
            position: 'fixed', width: '100%', height: '5000px', 'overflow-y': 'scroll'
          })
        ],{ optional: true }),
        query(':enter', 
            [
                style({ opacity: 0 })
            ], 
            { optional: true }
        ),

        query(':leave', 
            [
                style({ opacity: 1 }),
                animate(300, style({ opacity: 0 }))
            ], 
            { optional: true }
        ),

        query(':enter', 
            [
                style({ opacity: 0 }),
                animate(300, style({ opacity: 1 }))
            ], 
            { optional: true }
        )

    ])
    ])
   ]
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

  getRouteAnimation(outlet) {
    console.log(outlet.activatedRouteData.animation)
    return outlet.activatedRouteData.animation;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav) {
      this.showNav = true;
    }
  }

}
