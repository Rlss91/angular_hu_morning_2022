import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Hello world from ts';
  }
  handleBtnClick(): void {
    console.log('handleBtnClick()');
  }
  handleTxtKeyDown(event: KeyboardEvent): void {
    console.log(event);
  }
}
