import { PetDataService } from './../services/pet-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Actions, NgxsModule, Store } from '@ngxs/store';
import { AppPetState, getAppInitialState } from './app.state';
import { Pet, PetStatus, AppApp } from '../types/app.interfaces';
import { DummySetState, PetAction } from './app.actions';

describe('Pet state tests', () => {
  let store: Store;
  let actions: Actions;
  let service: PetDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppPetState]), HttpClientModule],
    }).compileComponents();

    store = TestBed.inject(Store);
    actions = TestBed.inject(Actions);
    service = TestBed.inject(PetDataService);
  }));

  test('Get a pet with success', waitForAsync(() => {
    const currentState = {
      ...getAppInitialState(),
    };

    const expectedState = {
      ...getAppInitialState(),
      pet: <Pet>{
        id: 1,
        name: 'Bob',
        status: PetStatus.Available,
      },
    };

    store.dispatch(new DummySetState(currentState));

    const action = new PetAction.GetOnePetSuccessAction(<Pet>{
      id: 1,
      name: 'Bob',
      status: PetStatus.Available,
    });
    store.dispatch(action);

    const actual = store.selectSnapshot((state) => state.pets);
    expect(actual).toEqual(expectedState);
  }));

  test.todo('Get a pet with error');
  test.todo('Get a list of pet filtered using status');
  test.todo('Get a list of pet filtered using status with error');
});
