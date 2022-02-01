import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighLight3]',
})
export class CustomHighLight3Directive {
  @Input() defaultBGColor: string = '';
  @Input('appCustomHighLight3') bgColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() {
    this.backgroundColor = this.defaultBGColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.backgroundColor = this.bgColor;
  }

  @HostListener('mouseout') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultBGColor;
  }
}
