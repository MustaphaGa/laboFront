import { TestBed } from '@angular/core/testing';

import { PreleveursService } from './preleveurs.service';

describe('PreleveursService', () => {
  let service: PreleveursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreleveursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
