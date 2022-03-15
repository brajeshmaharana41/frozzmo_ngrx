import { TestBed } from '@angular/core/testing';

import { CommonApiService } from './common.service';

describe('CommonApiService', () => {
  let service: CommonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
