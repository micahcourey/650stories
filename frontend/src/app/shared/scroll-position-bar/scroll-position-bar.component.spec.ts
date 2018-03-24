import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPositionBarComponent } from './scroll-position-bar.component';

describe('ScrollPositionBarComponent', () => {
  let component: ScrollPositionBarComponent;
  let fixture: ComponentFixture<ScrollPositionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPositionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPositionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
