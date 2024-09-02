import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { asdResolver } from './asd.resolver';

describe('asdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => asdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
