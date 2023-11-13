import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolActive'
})
export class BoolActivePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? "✓" : "X";
  }

}
