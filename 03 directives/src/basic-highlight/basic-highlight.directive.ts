import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[appBasicHighlight]' })
export class BasicDirectiveHighlight implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = 'lightgreen';
    this.element.nativeElement.style.padding = '20px';
  }
}
