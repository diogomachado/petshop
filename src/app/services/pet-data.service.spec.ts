import { APIResponse } from './../types/app.interfaces';
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

  test('should return a success code 200 after login()', (done) => {
    const spy = jest.spyOn(service, 'login');
    const response = service.login({
      username: 'test',
      password: '123456',
    });

    expect(spy).toHaveBeenCalled();

    response.subscribe((data) => {
      expect(data.code).toBe(200);
      done();
    });
  });

  test('should call logout()', (done) => {
    const spy = jest.spyOn(service, 'logout');
    const response = service.logout();

    expect(spy).toHaveBeenCalled();

    response.subscribe((data) => {
      expect(data.code).toBe(200);
      done();
    });
  });

  // test('should return a error code 500 after login()', (done) => {
  //   const spy = jest.spyOn<PetDataService, any>(service, 'login');
  //   const response = service.login({
  //     username: 'test',
  //     password: '123456',
  //   });
  //   spy.mockReturnValue(500);

  //   response.subscribe((data) => {
  //     expect(data).toBe(500);
  //     done();
  //   });
  // });
});
