import { Injectable, signal } from '@angular/core';
import { LanguagesEnum } from '../../data/schema/languages.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private readonly localStorageLanguageKey = 'language';

  public currentLangSignal = signal(LanguagesEnum.EN);

  public allLangsSignal = signal(Object.values(LanguagesEnum));

  constructor(private _translateService: TranslateService) {
    this.initTranslation();
  }

  public setLang(lang: string) {
    this._translateService.use(lang);
    localStorage.setItem(this.localStorageLanguageKey, lang);
    this.currentLangSignal.set(lang as LanguagesEnum);
  }

  private getLanguageFromStorage(): string | null {
    const language = localStorage.getItem(this.localStorageLanguageKey);

    if (this.isLanguage(language)) {
      return language;
    }

    return null;
  }

  private initTranslation(): void {
    this._translateService.setDefaultLang(this.currentLangSignal());
    this._translateService.addLangs(this.allLangsSignal());

    const lang = this.getLanguageFromStorage();

    if (lang) {
      this.setLang(lang);
    }
  }

  private isLanguage(lang: string | null): lang is LanguagesEnum {
    return !!lang && Object.values(LanguagesEnum).includes(lang as LanguagesEnum);
  }
}
