import { Injectable, signal } from '@angular/core';
import { LanguagesEnum } from '../../data/schema/languages.enum';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private readonly localStorageLanguageKey = 'language';

  private activeLanguage = signal<LanguagesEnum>(this.getLanguageFromStorage() ?? LanguagesEnum.EN);

  private getLanguageFromStorage(): LanguagesEnum | null {
    const language = localStorage.getItem(this.localStorageLanguageKey);

    if (language) {
      const languageEnumValue = LanguagesEnum[language as keyof typeof LanguagesEnum];

      return languageEnumValue ? languageEnumValue : null;
    }

    return null;
  }

  public getActiveLanguage(): LanguagesEnum {
    return this.activeLanguage();
  }

  public setToCzech() {
    localStorage.setItem(this.localStorageLanguageKey, LanguagesEnum.CS);
    this.activeLanguage.set(LanguagesEnum.CS);
  }

  public get getActiveLanguage$(): Observable<LanguagesEnum> {
    return toObservable(this.activeLanguage);
  }
}
