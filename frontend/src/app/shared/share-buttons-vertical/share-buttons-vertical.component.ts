import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'share-buttons-vertical',
  templateUrl: './share-buttons-vertical.component.html',
  styleUrls: ['./share-buttons-vertical.component.scss']
})
export class ShareButtonsVerticalComponent implements OnInit {
  @Input() shareText: string;

  constructor() { }

  ngOnInit() {
    console.log('shareText ', this.shareText)
    this.shareText = `"${this.shareText}"`;
  }

}
