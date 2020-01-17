import { TestBed } from '@angular/core/testing';

import { SignatoryService } from './signatory.service';

describe('SignatoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignatoryService = TestBed.get(SignatoryService);
    expect(service).toBeTruthy();
  });
});
