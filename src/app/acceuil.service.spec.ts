import { TestBed } from '@angular/core/testing';

import { AcceuilService } from './shared/acceuil.service';

describe('AcceuilService', () => {
  let service: AcceuilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
