import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css'],
})
export class NgforDirectiveComponent implements OnInit {
  arrOfNumber: number[];
  listName: string[];
  constructor() {
    this.arrOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.listName = ['kenny', 'john'];
  }

  ngOnInit(): void {}

  handleNumberButtonClick(number: number): void {
    console.log(number);
  }

  handleNameButtonClick(idx: number): void {
    this.listName = this.listName.filter((value, index) => idx != index);
  }
}
