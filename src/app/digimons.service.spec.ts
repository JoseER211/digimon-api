/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DigimonsService } from './digimons.service';

describe('Service: Digimons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigimonsService]
    });
  });

  it('should ...', inject([DigimonsService], (service: DigimonsService) => {
    expect(service).toBeTruthy();
  }));
});
