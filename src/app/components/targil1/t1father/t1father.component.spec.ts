import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1fatherComponent } from './t1father.component';

describe('T1fatherComponent', () => {
  let component: T1fatherComponent;
  let fixture: ComponentFixture<T1fatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1fatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T1fatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
