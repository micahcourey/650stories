import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFooterComponent } from './interview-footer.component';

describe('InterviewFooterComponent', () => {
  let component: InterviewFooterComponent;
  let fixture: ComponentFixture<InterviewFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
