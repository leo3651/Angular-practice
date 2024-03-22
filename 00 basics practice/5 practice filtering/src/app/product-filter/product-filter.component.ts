import { Component, Output, EventEmitter } from '@angular/core';
export interface iMinMaxFilter {
  min: number;
  max: number;
}

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  min = '';
  max = '';

  @Output() minMaxAdded = new EventEmitter<iMinMaxFilter>();

  onClickUpdateData() {
    const min = Number.parseFloat(this.min);
    const max = Number.parseFloat(this.max);

    if (Number.isNaN(min) || Number.isNaN(max)) alert('It must be a number');

    if (min >= max) alert('Minimum greater than maximum');

    this.minMaxAdded.emit({
      min: min,
      max: max,
    });
  }
}
