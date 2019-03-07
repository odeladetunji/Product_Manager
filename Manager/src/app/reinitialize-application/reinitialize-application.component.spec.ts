import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitializeApplicationComponent } from './reinitialize-application.component';

describe('ReinitializeApplicationComponent', () => {
  let component: ReinitializeApplicationComponent;
  let fixture: ComponentFixture<ReinitializeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitializeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitializeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
