import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit, OnDestroy {
  showNav = false;
  showMobileNav = false;
  showFilters = false;
  previousHeight: number;
  interviews: Array<any>;
  selectionShare: any;
  userEmail: string;
  overlayButtons: Array<any>;
  scrollIndex = 0;
  isHovering = false;

  constructor(private http: HttpClient, private _apiService: ApiService) {
    this.interviews = [];
    this.userEmail = '';
    this.previousHeight = 0;
    this.overlayButtons = [
      { title: 'show all', selected: true },
      { title: 'category 1', selected: false },
      { title: 'category 2', selected: false },
      { title: 'category 3', selected: false },
    ];
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._apiService.getInterviews().then((interviews: any) => {
      this.interviews = interviews;
    });
    this.selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
    });
    this.selectionShare.init();
  }

  ngOnDestroy() {
    this.showNav = false;
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

  submitEmail() {
    console.log('email address => ', this.userEmail);
  }

  toggleFilters() {
    if (this.showFilters) {
      this.showFilters = false;
    } else {
      this.showFilters = true;
    }
  }

  toggleFilterButton(filterName) {
    this.overlayButtons.forEach((filter) => {
      if (filter.title === filterName) {
        if (filter.selected) {
          filter.selected = false;
        } else {
          filter.selected = true;
        }
      }
    });
  }

  toggleHoverEffect() {
    if (this.isHovering) {
      this.isHovering = false;
    } else {
      this.isHovering = true;
    }
    console.log('hovering ', this.isHovering)
  }

}
