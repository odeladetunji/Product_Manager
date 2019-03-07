import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadsheetComponent } from './broadsheet.component';

describe('BroadsheetComponent', () => {
  let component: BroadsheetComponent;
  let fixture: ComponentFixture<BroadsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
