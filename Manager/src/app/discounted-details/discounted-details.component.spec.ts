import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedDetailsComponent } from './discounted-details.component';

describe('DiscountedDetailsComponent', () => {
  let component: DiscountedDetailsComponent;
  let fixture: ComponentFixture<DiscountedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
