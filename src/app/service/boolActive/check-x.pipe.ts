import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkX'
})
export class CheckXPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
