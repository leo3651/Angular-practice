import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appAlertPlaceholder]' })
export class PlaceholderDirective {
  constructor(public viewContRef: ViewContainerRef) {}
}
