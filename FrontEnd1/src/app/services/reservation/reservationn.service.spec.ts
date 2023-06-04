import { TestBed } from '@angular/core/testing';

import { ReservationnService } from './reservationn.service';

describe('ReservationnService', () => {
  let service: ReservationnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
