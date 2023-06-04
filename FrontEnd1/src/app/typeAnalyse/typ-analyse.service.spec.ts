import { TestBed } from '@angular/core/testing';

import { TypAnalyseService } from './typ-analyse.service';

describe('TypAnalyseService', () => {
  let service: TypAnalyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypAnalyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
