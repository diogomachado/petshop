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

  test('should return a pet with success', waitForAsync(() => {
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

  test('should return a empty pet', () => {
    const currentState = {
      ...getAppInitialState(),
    };

    const expectedState = {
      ...getAppInitialState(),
      pet: null,
    };

    store.dispatch(new DummySetState(currentState));

    const action = new PetAction.GetOnePetFailedAction();
    store.dispatch(action);

    const actual = store.selectSnapshot((state) => state.pets);
    expect(actual).toEqual(expectedState);
  });

  test('should return a list of pet', () => {
    const currentState = {
      ...getAppInitialState(),
    };

    const petList = [
      <Pet>{
        id: 1,
        name: 'Bob',
        status: PetStatus.Available,
      },
      <Pet>{
        id: 2,
        name: 'Tobby',
        status: PetStatus.Available,
      },
    ];

    const expectedState = {
      ...getAppInitialState(),
      pets: petList,
    };

    store.dispatch(new DummySetState(currentState));

    const action = new PetAction.FetchAllByStatusSuccessAction(petList);
    store.dispatch(action);

    const actual = store.selectSnapshot((state) => state.pets);
    expect(actual).toEqual(expectedState);
  });

  test('should return an empty list of pets', () => {
    const currentState = {
      ...getAppInitialState(),
    };

    const expectedState = {
      ...getAppInitialState(),
      pets: null,
    };

    store.dispatch(new DummySetState(currentState));

    const action = new PetAction.FetchAllByStatusFailedAction();
    store.dispatch(action);

    const actual = store.selectSnapshot((state) => state.pets);
    expect(actual).toEqual(expectedState);
  });

  test('should set userLogged with false in the state after logoutSuccess()', () => {
    const spy = jest.spyOn(service, 'logout');
    const currentState = {
      ...getAppInitialState(),
    };

    const expectedState = {
      ...getAppInitialState(),
      userLogged: false,
    };

    store.dispatch(new DummySetState(currentState));

    const action = new PetAction.LogoutAction();
    store.dispatch(action);

    const actual = store.selectSnapshot((state) => state.pets);
    expect(actual).toEqual(expectedState);
    expect(spy).toHaveBeenCalled();
  });
});
