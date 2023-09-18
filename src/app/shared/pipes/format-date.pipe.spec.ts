import { FormatDatePipe } from './format-date.pipe';
import { LocalisationService } from '../services/localisation.service';

// TODO If I had idea how to mock signals, I would test it.
describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;

  beforeEach(() => {
    const mockLocalisationService: Partial<LocalisationService> = {};

    pipe = new FormatDatePipe(mockLocalisationService as LocalisationService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
