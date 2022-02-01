import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-container',
  templateUrl: './life-cycle-hooks-container.component.html',
  styleUrls: ['./life-cycle-hooks-container.component.css'],
})
export class LifeCycleHooksContainerComponent {
  toggleFlag: boolean;
  childToggle: boolean;
  constructor() {
    this.toggleFlag = false;
    this.childToggle = false;
  }

  handleBtnClick(): void {
    this.toggleFlag = !this.toggleFlag;
  }

  handleBtnToggle(): void {
    this.childToggle = !this.childToggle;
  }
}
