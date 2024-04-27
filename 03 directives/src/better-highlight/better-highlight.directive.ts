import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.renderer);
    console.log(this.elementRef);
    const elRefNative = this.elementRef.nativeElement;

    this.renderer.setStyle(elRefNative, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(elRefNative, 'padding', '20px');
  }
}
