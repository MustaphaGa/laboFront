import { TestBed } from '@angular/core/testing';

import { DetailresultatService } from './detailresultat.service';

describe('DetailresultatService', () => {
  let service: DetailresultatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailresultatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
