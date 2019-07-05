import { TestBed } from '@angular/core/testing';

import { ComunphpService } from './comunphp.service';

describe('ComunphpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunphpService = TestBed.get(ComunphpService);
    expect(service).toBeTruthy();
  });
});
