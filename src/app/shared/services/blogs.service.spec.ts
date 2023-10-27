import { TestBed } from '@angular/core/testing';

import { BlogsService } from './blogs.service';
import {HttpClientModule} from "@angular/common/http";

describe('BlogsService', () => {
  let service: BlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
