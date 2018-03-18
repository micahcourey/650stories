import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pull-quote',
  templateUrl: './pull-quote.component.html',
  styleUrls: ['./pull-quote.component.scss']
})
export class PullQuoteComponent implements OnInit {
  @Input() quoteText: string;
  @Input() color: string;
  @Input() url: string;

  shareUrl: string;
  backgroundGradient: string;

  constructor() { }

  ngOnInit() {
    this.backgroundGradient = `linear-gradient(to right, ${this.color} 0%,${this.color} 35.2%,${this.color} 35.2%,white 35.2%,white 100%)`;
    // this.shareUrl = `https://twitter.com/intent/tweet?url=http%3A%2F%2F650stories.com%2F${this.url}&text=${this.quoteText}`;
    // console.log('twiter share', this.shareUrl)
  }

}
