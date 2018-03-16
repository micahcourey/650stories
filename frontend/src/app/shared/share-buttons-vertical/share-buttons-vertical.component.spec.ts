import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareButtonsVerticalComponent } from './share-buttons-vertical.component';

describe('ShareButtonsVerticalComponent', () => {
  let component: ShareButtonsVerticalComponent;
  let fixture: ComponentFixture<ShareButtonsVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareButtonsVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
