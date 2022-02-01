import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksContainerComponent } from './life-cycle-hooks-container.component';

describe('LifeCycleHooksContainerComponent', () => {
  let component: LifeCycleHooksContainerComponent;
  let fixture: ComponentFixture<LifeCycleHooksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHooksContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHooksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
