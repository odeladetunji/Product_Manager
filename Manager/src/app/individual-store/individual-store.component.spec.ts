import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStoreComponent } from './individual-store.component';

describe('IndividualStoreComponent', () => {
  let component: IndividualStoreComponent;
  let fixture: ComponentFixture<IndividualStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
