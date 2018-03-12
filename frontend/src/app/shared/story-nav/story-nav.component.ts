import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'story-nav',
  templateUrl: './story-nav.component.html',
  styleUrls: ['./story-nav.component.scss']
})
export class StoryNavComponent implements OnInit, OnDestroy {
  @Input() selectedTab: string;
  @Output() leavingPage = new EventEmitter();

  constructor() {
    this.selectedTab = 'home';
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.leavingPage.emit();
    console.log('leaving');
  }

}
