import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryButtonComponent } from './story-button.component';

describe('StoryButtonComponent', () => {
  let component: StoryButtonComponent;
  let fixture: ComponentFixture<StoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
