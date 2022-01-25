import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  inputValue: string;
  constructor() {
    this.title = 'Hello world from ts';
    this.inputValue = 'testt';
  }
  handleBtnClick(): void {
    console.log('handleBtnClick()');
  }
  handleTxtKeyDown(event: KeyboardEvent): void {
    console.log(event);
  }
}
