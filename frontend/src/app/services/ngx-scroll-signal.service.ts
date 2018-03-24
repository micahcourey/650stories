import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { ScrollSignal } from '../shared/scroll-signal.class';

@Injectable()
export class NgxScrollSignalService {

  get windowScroll() {
    return Observable.fromEvent(window, 'scroll')
      .map((event: any) => new ScrollSignal(
        event.target.defaultView.pageXOffset,
        event.target.defaultView.pageYOffset,
        event.target.defaultView.innerWidth,
        event.target.defaultView.innerHeight,
        event.target.body.clientWidth,
        event.target.body.clientHeight,
      ));
  }

}