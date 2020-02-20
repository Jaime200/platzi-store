import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProdictsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
