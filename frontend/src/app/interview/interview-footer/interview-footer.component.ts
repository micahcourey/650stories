import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interview-footer',
  templateUrl: './interview-footer.component.html',
  styleUrls: ['./interview-footer.component.scss']
})
export class InterviewFooterComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() nextInterview: any;
  @Input() nextInterviewSlug: string;
  
  constructor() { }

  ngOnInit() {
  }

}
