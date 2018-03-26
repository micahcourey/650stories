import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interview-header',
  templateUrl: './interview-header.component.html',
  styleUrls: ['./interview-header.component.scss']
})
export class InterviewHeaderComponent implements OnInit {
  @Input() interview;
  @Input() readingMins: number;

  constructor() { }

  ngOnInit() {
  }

}
