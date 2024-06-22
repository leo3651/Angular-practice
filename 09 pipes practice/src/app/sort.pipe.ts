import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, filterOption: string): any {
    value.sort((a, b) => {
      const nameA = a[filterOption].toUpperCase(); // ignore upper and lowercase
      const nameB = b[filterOption].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // names must be equal
    });
    return value;
  }
}
