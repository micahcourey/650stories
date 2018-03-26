import { Component, OnInit, HostListener } from '@angular/core';
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
  template: `<main [@routerTransition]="page.activatedRouteData.state">
              <router-outlet  #page="outlet" class="router-outlet"></router-outlet>
            </main>`,
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':enter :leave', style({ position: 'fixed', opacity: 1 }), { optional: true }),
        group([ 
          query(':enter', [
            style({ opacity:0 }),
            animate('1200ms ease-in-out', style({ opacity:1 })),
          ], { optional: true }),
          query(':leave', [
            style({ opacity:1 }),
            animate('1200ms ease-in-out', style({ opacity :0 }))], { optional: true }),
        ])
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
  
  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav) {
      this.showNav = true;
    }
  }

}
