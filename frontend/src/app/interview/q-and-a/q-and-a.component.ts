import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {
  @Input() qa;
  constructor() { }

  ngOnInit() {

  }

}
