import { TestBed } from '@angular/core/testing';

import { PeopleHttpService } from './people-http.service';

describe('PeopleHttpService', () => {
  let service: PeopleHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
