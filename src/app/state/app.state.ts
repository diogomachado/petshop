import { PetDataService } from './../services/pet-data.service';
import { PetAction } from './app.actions';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { App } from '../types/app.interfaces';
import { catchError, mergeMap } from 'rxjs';

export const getAppInitialState = (): App => ({
  pets: null,
  pet: null,
});

@State<App>({
  name: 'pets',
  defaults: getAppInitialState(),
})
@Injectable()
export class AppPetState {
  constructor(private petDataService: PetDataService) {}

  @Action(PetAction.GetOnePetAction)
  getOnePet(ctx: StateContext<App>, action: PetAction.GetOnePetAction) {
    // Call the API
    this.petDataService
      .getPet(action.id)
      .pipe(
        mergeMap((x) => ctx.dispatch(new PetAction.GetOnePetSuccessAction(x)))
      );
  }

  @Action(PetAction.GetOnePetSuccessAction)
  getOnePetSuccessAction(
    ctx: StateContext<App>,
    action: PetAction.GetOnePetSuccessAction
  ) {
    // Current state
    const state = ctx.getState();

    // Update the state
    ctx.setState({
      ...state,
      pet: action.payload,
    });
  }

  @Action(PetAction.FetchAllByStatusAction)
  async fetchAllByStatus(
    ctx: StateContext<App>,
    action: PetAction.FetchAllByStatusAction
  ) {
    // Current state
    const state = ctx.getState();

    const pets$ = this.petDataService.getListByStatus(action.status);
    pets$.subscribe((petsReturned) => {
      // Update the state
      ctx.setState({
        ...state,
        pets: petsReturned,
      });
    });
  }
}
