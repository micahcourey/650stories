import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent implements OnInit {
  @Input() image: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
