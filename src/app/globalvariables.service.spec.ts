import { TestBed, async } from '@angular/core/testing';

import { GlobalvariablesService } from './globalvariables.service';

describe('GlobalvariablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalvariablesService = TestBed.get(GlobalvariablesService);
    expect(service).toBeTruthy();
  });
 
});
