import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-strip',
  templateUrl: './photo-strip.component.html',
  styleUrls: ['./photo-strip.component.scss']
})
export class PhotoStripComponent implements OnInit {
  @Input() interview: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
