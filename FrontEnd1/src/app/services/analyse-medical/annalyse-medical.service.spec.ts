import { TestBed } from '@angular/core/testing';

import { AnnalyseMedicalService } from './annalyse-medical.service';

describe('AnnalyseMedicalService', () => {
  let service: AnnalyseMedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnalyseMedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
