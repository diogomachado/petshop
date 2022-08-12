import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Pet, PetStatus } from '../types/app.interfaces';

import { PetDataService } from './pet-data.service';

describe('PetDataService', () => {
  let service: PetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PetDataService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
