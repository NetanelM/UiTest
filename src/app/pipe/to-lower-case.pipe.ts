import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowerCase'
})
export class ToLowerCasePipe implements PipeTransform {

  transform(value: any): any {
    return value.charAt(0).toLowerCase() + value.slice(1);
  }

}
