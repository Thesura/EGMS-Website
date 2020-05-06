import { TestBed } from '@angular/core/testing';

import { NonStaffService } from './non-staff.service';

describe('NonStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NonStaffService = TestBed.get(NonStaffService);
    expect(service).toBeTruthy();
  });
});
