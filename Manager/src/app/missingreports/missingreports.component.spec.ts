import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingreportsComponent } from './missingreports.component';

describe('MissingreportsComponent', () => {
  let component: MissingreportsComponent;
  let fixture: ComponentFixture<MissingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
