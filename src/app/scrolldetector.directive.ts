import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolldetector]'
})
export class ScrolldetectorDirective {

  constructor() { }

  @HostListener('document:scroll', ['$event'])
  scrolling($event: Event):void {
    localStorage.setItem('scrollVal', $event.srcElement.scrollingElement.scrollTop)
  }


}
