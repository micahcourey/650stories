import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story404Component } from './story-404.component';

describe('Story404Component', () => {
  let component: Story404Component;
  let fixture: ComponentFixture<Story404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
