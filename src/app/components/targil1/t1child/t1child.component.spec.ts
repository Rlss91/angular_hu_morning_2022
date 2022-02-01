import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1childComponent } from './t1child.component';

describe('T1childComponent', () => {
  let component: T1childComponent;
  let fixture: ComponentFixture<T1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1childComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
