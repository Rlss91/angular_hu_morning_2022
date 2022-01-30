import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css'],
})
export class Calculator2Component implements OnInit {
  num1: number;
  num2: number;
  result: number;
  operator: string;
  line: string;
  numbersArr: number[];
  operatorsArr: string[];
  constructor() {
    this.num1 = NaN;
    this.num2 = NaN;
    this.result = NaN;
    this.operator = '';
    this.line = '';
    this.numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    this.operatorsArr = ['+', '-', '*', '/'];
  }

  ngOnInit(): void {}
  //15+10=?
  handleNumberButtonClick(number: number): void {
    if (this.operator == '') {
      if (isNaN(this.num1) || this.num1 === 0) {
        this.num1 = number;
      } else {
        this.num1 = this.num1 * 10 + number;
      }
    } else {
      if (isNaN(this.num2) || this.num2 === 0) {
        this.num2 = number;
      } else {
        this.num2 = this.num2 * 10 + number;
      }
    }
    this.createLine();
  }
  handleOperationButtonClick(op: string): void {
    this.operator = op;
    this.createLine();
  }

  handleCalcButtonClick(): void {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
    this.num1 = this.result;
    this.num2 = NaN;
    this.operator = '';
    this.line = this.result + '';
  }

  createLine(): void {
    this.line = '';
    if (!isNaN(this.num1)) {
      this.line += this.num1;
    }
    if (this.operator != '') {
      this.line += this.operator;
    }
    if (!isNaN(this.num2)) {
      this.line += this.num2;
    }
  }

  canCalc(): boolean {
    return !isNaN(this.num1) && this.operator != '' && !isNaN(this.num2);
  }
}
