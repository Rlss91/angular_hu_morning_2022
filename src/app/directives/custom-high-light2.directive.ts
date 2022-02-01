import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomHighLight2]',
})
export class CustomHighLight2Directive {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    console.log(eventData);
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseout') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '');
  }
}
