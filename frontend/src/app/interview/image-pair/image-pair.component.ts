import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-pair',
  templateUrl: './image-pair.component.html',
  styleUrls: ['./image-pair.component.scss']
})
export class ImagePairComponent implements OnInit {
  @Input() interview: any;

  constructor() { }

  ngOnInit() {
    this.interview.image_pair.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0;
    });
  }

}
