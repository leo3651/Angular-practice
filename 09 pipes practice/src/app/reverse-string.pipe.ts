import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
})
export class ReverseStringPipe implements PipeTransform {
  newString: string = '';
  transform(value: string): string {
    this.newString = this.newString + value[value.length - 1];
    value = value.slice(0, -1);
    if (value.length > 0) this.transform(value);

    return this.newString
      .toLowerCase()
      .replace(this.newString[0], this.newString[0].toUpperCase());
  }
}
