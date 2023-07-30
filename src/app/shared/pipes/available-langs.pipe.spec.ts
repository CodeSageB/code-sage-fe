import { AvailableLangsPipe } from './available-langs.pipe';
import { LanguagesEnum } from '../../data/schema/languages.enum';

describe('AvailableLangsPipe', () => {
  it('create an instance', () => {
    const pipe = new AvailableLangsPipe();
    expect(pipe).toBeTruthy();
  });

  it('expect to get list with all languages but active language', () => {
    const allLanguages = Object.values(LanguagesEnum);
    const activeLanguage = LanguagesEnum.CS;
    const pipe = new AvailableLangsPipe();

    const availableLanguages = pipe.transform(allLanguages, activeLanguage);

    expect(availableLanguages).not.toContain(activeLanguage);
    expect(availableLanguages.length).not.toBe(allLanguages.length);
  });
});
