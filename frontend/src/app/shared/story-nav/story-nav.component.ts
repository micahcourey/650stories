import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-nav',
  templateUrl: './story-nav.component.html',
  styleUrls: ['./story-nav.component.scss']
})
export class StoryNavComponent implements OnInit {
  @Input() selectedTab: string;

  constructor() {
    this.selectedTab = 'home';
  }

  ngOnInit() {

  }

}
