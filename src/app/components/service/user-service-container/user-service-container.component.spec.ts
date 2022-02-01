import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceContainerComponent } from './user-service-container.component';

describe('UserServiceContainerComponent', () => {
  let component: UserServiceContainerComponent;
  let fixture: ComponentFixture<UserServiceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServiceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
