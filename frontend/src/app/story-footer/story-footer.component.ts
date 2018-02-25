import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-footer',
  templateUrl: './story-footer.component.html',
  styleUrls: ['./story-footer.component.scss']
})
export class StoryFooterComponent implements OnInit {
  @Input() fullwidth: boolean;

  constructor() {
    this.fullwidth = false;
  }

  ngOnInit() {
  }

}
