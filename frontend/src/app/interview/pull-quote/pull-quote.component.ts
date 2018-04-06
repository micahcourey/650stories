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
  }

}
