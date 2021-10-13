import { TestBed } from '@angular/core/testing';

import { AddicService } from './addic.service';

describe('AddicService', () => {
  let service: AddicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
