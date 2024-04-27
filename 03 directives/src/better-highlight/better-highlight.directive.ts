import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.renderer);
    console.log(this.elementRef);
    const elRefNative = this.elementRef.nativeElement;

    this.renderer.setStyle(
      elRefNative,
      'backgroundColor',
      'rgba(173, 216, 230, 0.581)'
    );
    this.renderer.setStyle(elRefNative, 'padding', '20px');

    this.elementBabkgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'rgba(255, 0, 0, 0.5)';
  @Input('appBetterHighlight') highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') elementBabkgroundColor: string;

  @HostListener('mouseenter') onMouseEnter(event: ElementRef) {
    const elRefNative = this.elementRef.nativeElement;
    this.renderer.setStyle(elRefNative, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(elRefNative, 'padding', '20px');

    this.elementBabkgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    const elRefNative = this.elementRef.nativeElement;
    this.renderer.setStyle(
      elRefNative,
      'backgroundColor',
      'rgba(173, 216, 230, 0.581)'
    );
    this.renderer.setStyle(elRefNative, 'padding', '20px');

    this.elementBabkgroundColor = this.defaultColor;
  }
}
