import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNavComponent } from './big-nav.component';

describe('BigNavComponent', () => {
  let component: BigNavComponent;
  let fixture: ComponentFixture<BigNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
