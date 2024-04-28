import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    console.log('event.target: ', event.target);
    console.log('elementRef: ', this.elementRef.nativeElement);
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
