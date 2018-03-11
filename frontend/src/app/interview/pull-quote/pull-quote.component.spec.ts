import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullQuoteComponent } from './pull-quote.component';

describe('PullQuoteComponent', () => {
  let component: PullQuoteComponent;
  let fixture: ComponentFixture<PullQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
