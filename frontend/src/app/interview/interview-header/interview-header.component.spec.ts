import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewHeaderComponent } from './interview-header.component';

describe('InterviewHeaderComponent', () => {
  let component: InterviewHeaderComponent;
  let fixture: ComponentFixture<InterviewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
