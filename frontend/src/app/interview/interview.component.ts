import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  interview: any;
  questions: any;

  constructor(private _apiService: ApiService, private route: ActivatedRoute, ) {
    console.log('interview constructor')
    this.interviews = [];
    this.questions = [];
    this.interview = {};
    this._apiService.getInterview(this.route.snapshot.params['id']).then((interview: any) => {
      this.interview = interview;
      this.questions = this.interview.questions.sort((a, b) => {
        return a.question_number - b.question_number;
      });

      console.log('questions', this.questions)
      console.log('got it!', interview);
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    console.log(this.questions)
    window.scrollTo(0, 0);
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
