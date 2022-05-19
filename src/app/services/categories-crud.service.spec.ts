import { TestBed } from '@angular/core/testing';

import { CategoriesCrudService } from './categories-crud.service';

describe('CategoriesCrudService', () => {
  let service: CategoriesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
