import { TestBed } from '@angular/core/testing';

import { AddicdosService } from './addicdos.service';

describe('AddicdosService', () => {
  let service: AddicdosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddicdosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
