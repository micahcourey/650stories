import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientJsonpModule, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';

import { ApiService } from '../services/api.service';

interface MailChimpResponse {
  result: string;
  msg: string;
}

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
  selectedSortType: string;
  submitted = false;
  emailForm: FormGroup;
  mailChimpEndpoint: string;
  error: string;

  constructor(private http: HttpClient, private _apiService: ApiService) {
    this.interviews = [];
    this.userEmail = '';
    this.error = '';
    this.selectedSortType = 'mostRecent';
    this.mailChimpEndpoint = 'https://650stories.us18.list-manage.com/subscribe/post-json?u=8d498b01070d7148bd7e74223&amp;id=5428f52d0e&';
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
    this.emailForm = new FormGroup({
      email_address: new FormControl('', [Validators.required, Validators.email])
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
    if ((!this.showNav || !this.showMobileNav) && this.scrollIndex > 0) {
      this.showNav = true;
      this.showMobileNav = true;
    }
    this.scrollIndex++;
  }


  submitEmail() {
    this.error = '';
    this.submitted = true;

    if (this.emailForm.get('email_address').valid) {

      const params = new HttpParams()
        .set('NAME', 'test')
        .set('EMAIL', this.emailForm.get('email_address').value)
        .set('b_8d498b01070d7148bd7e74223_5428f52d0e', ''); // hidden input name
      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
            this.submitted = true;
            console.log('submitted!');
            this.emailForm.reset();
            setTimeout(() => {
              this.submitted = false;
            }, 3000);
        } else {
          this.error = response.msg;
          console.error(this.error);
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    }
  }

  toggleFilters() {
    if (this.showFilters) {
      this.showFilters = false;
    } else {
      this.showFilters = true;
    }
  }

  sortInterviews(sortType: string) {
    if (sortType === 'mostRecent') {
      this.interviews.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }
    if (sortType === 'earliest') {
      this.interviews.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a - b;
      });
    }
  }

  toggleFilterButton(filterName) {
    this.overlayButtons.forEach((filter) => {
      if (filter.title === filterName) {
        if (filter.selected) {
          filter.selected = false;
        } else {
          filter.selected = true;
          if (filterName === 'show all') {
            this.overlayButtons.forEach((f: any) => {
              if (f.title !== 'show all') {
                f.selected = false;
              }
            });
          } else {
            this.overlayButtons[0].selected = false;
          }
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
  }

}
