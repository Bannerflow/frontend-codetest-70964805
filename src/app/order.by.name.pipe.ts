import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'orderByName',
})
export class OrderByNamePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
