import { TestBed } from '@angular/core/testing';

import { DepartmantService } from './departmant.service';

describe('DepartmantService', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmantService = TestBed.get(DepartmantService);
    expect(service).toBeTruthy();
  });
});
