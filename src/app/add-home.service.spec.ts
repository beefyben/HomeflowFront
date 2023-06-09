import { TestBed } from '@angular/core/testing';

import { AddHomeService } from './Service/add-home.service';

describe('AddHomeService', () => {
  let service: AddHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
