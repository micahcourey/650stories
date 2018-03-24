import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePairComponent } from './image-pair.component';

describe('ImagePairComponent', () => {
  let component: ImagePairComponent;
  let fixture: ComponentFixture<ImagePairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
