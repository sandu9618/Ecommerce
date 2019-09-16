import { TestBed } from '@angular/core/testing';

import { CategoryMenuService } from './category-menu.service';

describe('CategoryMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryMenuService = TestBed.get(CategoryMenuService);
    expect(service).toBeTruthy();
  });
});
