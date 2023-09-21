import { effect, Injectable, signal } from '@angular/core';
import { LanguagesEnum } from '../schema/languages.enum';
import { TranslateService } from '@ngx-translate/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private readonly localStorageLanguageKey = 'language';

  private readonly availableLanguages = Object.values(LanguagesEnum);

  public currentLangSignal = signal(LanguagesEnum.EN);

  public allLangsSignal = signal(this.availableLanguages);

  public currentLang$ = toObservable(this.currentLangSignal);

  constructor(private _translateService: TranslateService) {
    effect(() => {
      localStorage.setItem(this.localStorageLanguageKey, this.currentLangSignal());
    });

    this.initTranslation();
  }

  public setLang(lang: string): void {
    this._translateService.use(lang);
    this.currentLangSignal.set(lang as LanguagesEnum);
  }

  private getLanguageFromStorage(): string | null {
    const language = localStorage.getItem(this.localStorageLanguageKey);

    if (this.isAvailableLanguage(language)) {
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

  private isAvailableLanguage(lang: string | null): lang is LanguagesEnum {
    return !!lang && this.availableLanguages.includes(lang as LanguagesEnum);
  }
}
