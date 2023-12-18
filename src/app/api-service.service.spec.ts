import { TestBed } from '@angular/core/testing';

import { ArbolService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ArbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
