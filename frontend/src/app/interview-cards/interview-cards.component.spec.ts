import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCardsComponent } from './interview-cards.component';

describe('InterviewCardComponent', () => {
  let component: InterviewCardsComponent;
  let fixture: ComponentFixture<InterviewCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
