import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-strip',
  templateUrl: './photo-strip.component.html',
  styleUrls: ['./photo-strip.component.scss']
})
export class PhotoStripComponent implements OnInit {
  @Input() interview: any;

  stripImages: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.interview)

    this.interview.photo_strip_images.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0;
    });
  }

}
