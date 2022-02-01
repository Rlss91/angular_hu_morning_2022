import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksChildComponent } from './life-cycle-hooks-child.component';

describe('LifeCycleHooksChildComponent', () => {
  let component: LifeCycleHooksChildComponent;
  let fixture: ComponentFixture<LifeCycleHooksChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHooksChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHooksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
