import { Component, OnInit, Input, HostListener, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class InterviewComponent implements OnInit, OnChanges, OnDestroy {
  title = 'app';
  nextInterview: any;
  selectionShare: any;
  showNav = false;
  loading = false;
  noQuestions = false;
  lastInterview = false;
  showMobileNav = false;
  previousHeight: number;
  interview: any;
  questions: any;
  scrollIndex = 0;
  nextInterviewSlug: string;
  readingMins: number;

  constructor(private _apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.nextInterviewSlug = '';
    this.readingMins = 0;
    this.previousHeight = 0;
    this.questions = {};
    this.interview = {};
    this.getInterview();
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    console.log(this.questions);
    window.scrollTo(0, 0);
    this.selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
    });
    this.selectionShare.init();
  }

  ngOnChanges() {
    console.log('onChanges Fired');
  }

  ngOnDestroy() {

  }

  getInterview() {
    this.loading = true;
    this.interview = {};
    setTimeout(() => {
      this._apiService.getInterview(this.route.snapshot.params['slug']).then((interviews: any) => {
        console.log('interview component interviews ', interviews);
        this.interview = interviews[0];
        this.readingMins = this.calcReadingTime(this.interview.questions);
        console.log('Reading Time: ', this.readingMins + ' minutes');
        if (interviews[1] !== undefined) {
          this.nextInterview = interviews[1];
          console.log(this.nextInterview);
          if (this.nextInterview.slug) {
            this.nextInterviewSlug = this.nextInterview.slug;
          } else {
            this.nextInterviewSlug = this.nextInterview._id;
          }
        } else {
          this.lastInterview = true;
        }
        this.questions = this.interview.questions;

        if (!this.questions) {
          this.noQuestions = true;
        }
        window.scrollTo(0, 0);
        this.loading = false;
      });
    }, 1);

  }

  calcReadingTime(questions: Array<any>) {
    // let words = 0;
    // questions.forEach((question) => {
    //   let qWords = 0;
    //   qWords = question.question_text.split(' ').length + question.answer_text.split(' ').length;
    //   words = qWords + words;
    // });
    // return Math.round(words / 250);
    return 8;
  }

  showNext() {
    this.router.navigate(['/interview', 'bego_lozano']).then((nav) => {
      this.getInterview();
    }, (err) => {
      console.log(err);
    });
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if ((!this.showNav || !this.showMobileNav) && this.scrollIndex > 0) {
      this.showNav = true;
      this.showMobileNav = true;
    }
    // const height = event.path[0].documentElement.scrollTop;
    // if (height === 0) {
    //   this.showMobileNav = false;
    // }
    //  else if (this.previousHeight > height) {
    //   this.showMobileNav = true;
    // } else {
    //   this.showMobileNav = false;
    // }
    // this.previousHeight = event.path[0].documentElement.scrollTop;
    this.scrollIndex++;
  }

}
