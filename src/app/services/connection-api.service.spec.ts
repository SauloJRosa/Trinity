/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectionApiService } from './connection-api.service';

describe('Service: ConnectionApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionApiService]
    });
  });

  it('should ...', inject([ConnectionApiService], (service: ConnectionApiService) => {
    expect(service).toBeTruthy();
  }));
});
