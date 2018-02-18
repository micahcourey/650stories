import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interview-cards',
  templateUrl: './interview-cards.component.html',
  styleUrls: ['./interview-cards.component.scss']
})
export class InterviewCardsComponent implements OnInit {
  @Input() interviews: Array<any>;
  
  boxColors: Array<any>;

  constructor() {
    this.boxColors = ['#1cb1d7', '#58e2b0', '#ffcf2d'];
  }

  ngOnInit() {
    this.getColors();
    this.shortenDescription();
  }

  shortenDescription() {
    this.interviews.forEach(interview => {
      let sentenceCount: number = 0;
      let desc = interview.description;
      for (var i = 0; i < desc.length; i++) {
        if (desc[i] === '.' || desc[i] === '?' || desc[i] === '!') {
          sentenceCount++;
          if (sentenceCount === 2) {
            const shortDescription = desc.slice(0, i + 1);
            console.log('shortened description => ', shortDescription);
            interview.short_description = shortDescription;
          }
        }
      }
    });
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
    console.log('intervies => ', this.interviews)
  }

}
