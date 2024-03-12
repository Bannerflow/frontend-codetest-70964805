import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'removeHyphensAndCapitalize',
})
export class RemoveHyphensAndCapitalize implements PipeTransform {
  transform(text: string): string {
    if (!text) return '';
    return text.replace(/-/g, ' ');
  }
}
