import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomHighLight1]',
})
export class CustomHighLight1Directive {
  constructor(private elRef: ElementRef) {
    console.log(this.elRef);
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }
}
