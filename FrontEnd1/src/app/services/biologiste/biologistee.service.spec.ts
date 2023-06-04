import { TestBed } from '@angular/core/testing';

import { BiologisteeService } from './biologistee.service';

describe('BiologisteeService', () => {
  let service: BiologisteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiologisteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
