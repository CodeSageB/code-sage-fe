import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availableLangs',
  standalone: true,
})
export class AvailableLangsPipe implements PipeTransform {
  transform(allLanguages: string[], activeLanguage: string): string[] {
    return allLanguages.filter((language) => language !== activeLanguage);
  }
}
