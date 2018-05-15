import { TestBed, inject } from '@angular/core/testing';

import { SiblingDataServiceService } from './sibling-data-service.service';

describe('SiblingDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingDataServiceService]
    });
  });

  it('should be created', inject([SiblingDataServiceService], (service: SiblingDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
