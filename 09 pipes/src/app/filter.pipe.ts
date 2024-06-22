import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propertyName: string): any {
    if (value.length === 0 || filterString === '') return value;

    const resultArray = [];
    for (const element of value) {
      if (element[propertyName] === filterString) resultArray.push(element);
    }

    return resultArray;
  }
}
