import { TestBed } from '@angular/core/testing';

import { LocalisationService } from './localisation.service';
import { TranslateModule } from '@ngx-translate/core';

describe('LocalisationService', () => {
  let service: LocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(LocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SetLang function works', () => {
    service.setLang('cs');

    expect(service.currentLangSignal()).toBe('cs');
  });
});
