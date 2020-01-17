import { TestBed } from '@angular/core/testing';

import { DBconfigService } from './dbconfig.service';

describe('DBconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBconfigService = TestBed.get(DBconfigService);
    expect(service).toBeTruthy();
  });
});
