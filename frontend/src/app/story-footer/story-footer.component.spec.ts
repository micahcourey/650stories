import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFooterComponent } from './story-footer.component';

describe('StoryFooterComponent', () => {
  let component: StoryFooterComponent;
  let fixture: ComponentFixture<StoryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
