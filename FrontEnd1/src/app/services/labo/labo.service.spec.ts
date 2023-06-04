import { TestBed } from '@angular/core/testing';

import { LaboService } from './labo.service';

describe('LaboService', () => {
  let service: LaboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
