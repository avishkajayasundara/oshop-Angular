import { TestBed } from '@angular/core/testing';

import { AuthHuardService } from './auth-huard.service';

describe('AuthHuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHuardService = TestBed.get(AuthHuardService);
    expect(service).toBeTruthy();
  });
});
