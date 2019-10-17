import { TestBed } from '@angular/core/testing';

import { InstafeedService } from './instafeed.service';

describe('InstafeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstafeedService = TestBed.get(InstafeedService);
    expect(service).toBeTruthy();
  });
});
