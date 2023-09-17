import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { cs, enUS } from 'date-fns/locale';
import { LanguagesEnum } from '../schema/languages.enum';
import { LocalisationService } from '../services/localisation.service';

@Pipe({
  name: 'formatDate',
  // Transforming few texts in not gonna reduce in performance issues and will simplify the code. Therefore, we can use pure: false.
  pure: false,
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  constructor(private localisationService: LocalisationService) {}

  transform(date: Date, dateFormat?: string): string {
    const locale = this.localisationService.currentLangSignal();

    return format(new Date(date), dateFormat ?? this.prepareDateFormat(), {
      locale: locale === LanguagesEnum.CS ? cs : enUS,
    });
  }

  private prepareDateFormat(): string {
    const locale = this.localisationService.currentLangSignal();
    return locale === LanguagesEnum.CS ? 'd. MMMM yyyy' : 'MMMM d, yyyy';
  }
}
