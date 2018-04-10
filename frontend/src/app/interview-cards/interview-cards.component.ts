import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interview-cards',
  templateUrl: './interview-cards.component.html',
  styleUrls: ['./interview-cards.component.scss']
})
export class InterviewCardsComponent implements OnInit {
  @Input() interviews: Array<any>;
  @Input() classes: string;
  @Input() limit: number;

  boxColors: Array<any>;

  constructor() {
    this.boxColors = ['#1cb1d7', '#58e2b0', '#ffcf2d'];
  }

  ngOnInit() {
    this.getColors();
    this.shortenDescription();
    if (this.limit) {
      this.interviews = this.limitInterviews(this.limit);
    }
    this.sortInterviewsByDate();
  }

  sortInterviewsByDate() {
    this.interviews.sort((a, b) => {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  shortenDescription() {
    this.interviews.forEach(interview => {
      let sentenceCount: number = 0;
      const desc = interview.description;
      interview.mobile_description = desc.slice(0, 250) + '...';
      for (let i = 0; i < desc.length; i++) {
        if (desc[i] === '.' || desc[i] === '?' || desc[i] === '!') {
          sentenceCount++;
          if (sentenceCount === 2) {
            const shortDescription = desc.slice(0, i + 1);
            interview.short_description = shortDescription;
          }
        }
      }
    });
  }

  limitInterviews(limit: number) {
    return this.interviews.slice(0, limit);
  }

  getColors() {
    let i = 0;
    this.interviews.forEach(interview => {
      interview.color = this.boxColors[i];
      i++;
      if (i === 3) {
        i = 0;
      }
    });
  }

}
