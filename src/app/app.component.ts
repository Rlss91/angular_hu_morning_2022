import { Component } from '@angular/core';
//const { Component } = require('@angular/core');

export interface Animal {
  name?: string;
  raglaim: number;
  zanav: boolean;
}

export enum PulotHeshbon {
  ADD, // +
  SUB, // -
  MUL, // *
  DIV, // /
}

export interface IFunction {
  importantFunction(arg1: number): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements IFunction {
  importantFunction(arg1: number): void {
    throw new Error('Method not implemented.');
  }
  title = 'firstAngularApp';
  oneMore: string;
  constructor() {
    this.oneMore = '';
  }
  ahah(beemet: string, num: number, loyodaat: boolean): string {
    let mispar: number = 5;
    // let mispar = 5;
    let shem: string = 'kenny';
    // let shem = 'kenny';
    let tnay: boolean = true;
    // let tnay = true;
    shem = 'john';
    // shem = 5; // type error

    let objHaya: Animal = {
      zanav: true,
      raglaim: 4,
    };
    this.objMethod(objHaya);

    let arrString: string[] = ['a', 'bb', 'ccc'];
    let arrHaya: Animal[] = [];
    arrHaya = [...arrHaya, { zanav: true, raglaim: 5 }];
    let cat: Animal;
    let utype: string | number | boolean;
    utype = 5;
    utype = 'str';
    utype = true;
    return '5';
  }
  objMethod(animal: Animal): void {
    console.log(animal);
  }
  calc(num1: number, num2: number, act: string): number {
    switch (act) {
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return NaN;
        } else {
          return num1 / num2;
        }
      case '+':
      default:
        return num1 + num2;
    }
  }

  calcEnum(num1: number, num2: number, opr: PulotHeshbon): number {
    switch (opr) {
      case PulotHeshbon.SUB:
        return num1 - num2;
      case PulotHeshbon.MUL:
        return num1 * num2;
      case PulotHeshbon.DIV:
        if (num2 === 0) {
          return NaN;
        } else {
          return num1 / num2;
        }
      case PulotHeshbon.ADD:
      default:
        return num1 + num2;
    }
  }

  newCalc(): void {
    let resolt: number;
    resolt = this.calcEnum(1, 1, PulotHeshbon.MUL);
  }
}
