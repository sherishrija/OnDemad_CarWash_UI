import { TestBed } from '@angular/core/testing';

import { PackageserviceService } from './packageservice.service';

describe('PackageserviceService', () => {
  let service: PackageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
