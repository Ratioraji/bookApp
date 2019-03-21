import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoReviewYetComponent } from './no-review-yet.component';

describe('NoReviewYetComponent', () => {
  let component: NoReviewYetComponent;
  let fixture: ComponentFixture<NoReviewYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoReviewYetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoReviewYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
