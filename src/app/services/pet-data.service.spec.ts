import { TestBed } from '@angular/core/testing';
import { Pet, PetStatus } from '../types/app.interfaces';

import { PetDataService } from './pet-data.service';

describe('PetDataService', () => {
  let service: PetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetDataService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get a specific data about one pet', () => {
    const expected = <Pet>{
      name: 'Tobby',
      status: PetStatus.Available,
    };

    expect(service.getPet(1)).toMatchObject(expected);
  });
});
