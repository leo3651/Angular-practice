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

    this.min = '';
    this.max = '';

    if (Number.isNaN(min) || Number.isNaN(max))
      return alert('Input must be a number');

    if (min >= max) return alert('Maximum must be greater than minimum');

    this.minMaxAdded.emit({
      min: min,
      max: max,
    });
  }
}
