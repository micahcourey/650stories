import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'interview-footer',
  templateUrl: './interview-footer.component.html',
  styleUrls: ['./interview-footer.component.scss']
})
export class InterviewFooterComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() nextInterview: any;
  @Input() nextInterviewSlug: string;
  @Output() interviewChanged = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {

  }

  showNext() {
    console.log('showNext clicked')
    this.router.navigate(['/interview', this.nextInterviewSlug]).then((nav) => {
      console.log('inside router')
      this.interviewChanged.emit();
    }, (err) => {
      console.log(err);
    });
  }

}
