import { TestBed } from '@angular/core/testing';

import { AddicunoService } from './addicuno.service';

describe('AddicunoService', () => {
  let service: AddicunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddicunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
