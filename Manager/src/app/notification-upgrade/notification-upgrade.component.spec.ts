import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationUpgradeComponent } from './notification-upgrade.component';

describe('NotificationUpgradeComponent', () => {
  let component: NotificationUpgradeComponent;
  let fixture: ComponentFixture<NotificationUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
