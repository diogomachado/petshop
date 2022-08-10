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
    const state = ctx.getState();

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
    this.petDataService
      .getListByStatus(action.status)
      .pipe(
        mergeMap((x) =>
          ctx.dispatch(new PetAction.FetchAllByStatusSuccessAction(x))
        )
      );
  }

  @Action(PetAction.FetchAllByStatusSuccessAction)
  async fetchAllByStatuSuccess(
    ctx: StateContext<App>,
    action: PetAction.FetchAllByStatusSuccessAction
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      pets: action.payload,
    });
  }
}
