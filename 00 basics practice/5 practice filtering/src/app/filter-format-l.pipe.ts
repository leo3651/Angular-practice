import { Pipe, PipeTransform } from '@angular/core';
import { iMinMaxFilter } from './product-filter/product-filter.component';

@Pipe({
  name: 'filterFormatL',
})
export class FilterFormatLPipe implements PipeTransform {
  transform(value: iMinMaxFilter | undefined, ...args: unknown[]): string {
    if (!value) return 'No Value';
    return '' + value.min + value.max;
  }
}
