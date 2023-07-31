import { TestBed } from '@angular/core/testing';

import { DrawerControlsService } from './drawer-controls.service';

describe('DrawerControlsService', () => {
  let service: DrawerControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
