import { TestBed } from '@angular/core/testing';

import { ServiceHeroService } from './service-hero.service';

describe('ServiceHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceHeroService = TestBed.get(ServiceHeroService);
    expect(service).toBeTruthy();
  });
});
