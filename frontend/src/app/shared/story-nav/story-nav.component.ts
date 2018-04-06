import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'story-nav',
  templateUrl: './story-nav.component.html',
  styleUrls: ['./story-nav.component.scss']
})
export class StoryNavComponent implements OnInit, OnDestroy {
  @Input() selectedTab: string;
  @Input() interviewColor: string;
  @Input() showProgress = false;
  @Output() leavingPage = new EventEmitter();

  showMobileMenu = false;
  showNav = false;

  constructor() {
    this.selectedTab = 'home';
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.leavingPage.emit();
  }

  toggleNav() {
    if (this.showMobileMenu === false) {
      this.showMobileMenu = true;
    } else {
      this.showMobileMenu = false;
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if (!this.showNav) {
      this.showNav = true;
    }
  }

}
