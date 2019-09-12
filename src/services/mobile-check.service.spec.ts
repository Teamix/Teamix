import { TestBed } from '@angular/core/testing';

import { MobileCheckService } from './mobile-check.service';

describe('MobileCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileCheckService = TestBed.get(MobileCheckService);
    expect(service).toBeTruthy();
  });
});
