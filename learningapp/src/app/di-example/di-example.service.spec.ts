import { TestBed } from '@angular/core/testing';

import { DiExampleService } from './di-example.service';

describe('DiExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiExampleService = TestBed.get(DiExampleService);
    expect(service).toBeTruthy();
  });
});
