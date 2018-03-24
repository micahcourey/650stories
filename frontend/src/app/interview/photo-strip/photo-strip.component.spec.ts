import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoStripComponent } from './photo-strip.component';

describe('PhotoStripComponent', () => {
  let component: PhotoStripComponent;
  let fixture: ComponentFixture<PhotoStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
