import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdlistComponent } from './thresholdlist.component';

describe('ThresholdlistComponent', () => {
  let component: ThresholdlistComponent;
  let fixture: ComponentFixture<ThresholdlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThresholdlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresholdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
