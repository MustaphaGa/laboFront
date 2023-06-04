import { TestBed } from '@angular/core/testing';

import { DeepartementService } from './deepartement.service';

describe('DeepartementService', () => {
  let service: DeepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
