import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-header',
  templateUrl: './story-header.component.html',
  styleUrls: ['./story-header.component.scss']
})
export class StoryHeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
