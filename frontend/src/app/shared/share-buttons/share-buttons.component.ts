import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss']
})
export class ShareButtonsComponent implements OnInit {
  @Input() shareText: string;

  description: string;

  constructor() { }

  ngOnInit() {
    if (this.shareText) {
      this.description = this.shareText;
    } else {
      this.description = 'Check out this inspiring interview from the 650 Area Code!';
    }
  }

}
