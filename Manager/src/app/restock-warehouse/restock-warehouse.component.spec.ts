import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockWarehouseComponent } from './restock-warehouse.component';

describe('RestockWarehouseComponent', () => {
  let component: RestockWarehouseComponent;
  let fixture: ComponentFixture<RestockWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestockWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
