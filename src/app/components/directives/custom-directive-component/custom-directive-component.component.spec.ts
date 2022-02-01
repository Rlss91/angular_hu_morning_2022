import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveComponentComponent } from './custom-directive-component.component';

describe('CustomDirectiveComponentComponent', () => {
  let component: CustomDirectiveComponentComponent;
  let fixture: ComponentFixture<CustomDirectiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
