import { TestBed } from '@angular/core/testing';

import { ProductsCrudService } from './products-crud.service';

describe('ProductsCrudService', () => {
  let service: ProductsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
