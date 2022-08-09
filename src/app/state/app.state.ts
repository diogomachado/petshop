import { PetDataService } from './../services/pet-data.service';
import { Pet, PetStatus } from '../../app/types/app.interfaces';
import { PetAction } from './app.actions';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { App } from '../types/app.interfaces';
import { firstValueFrom, lastValueFrom, take } from 'rxjs';

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
    // Current state
    const state = ctx.getState();

    const pets$ = this.petDataService.getPet(1);
    pets$.subscribe((petReturned) => {
      // Update the state
      ctx.setState({
        ...state,
        pet: petReturned,
      });

      console.log('The currently state', state);
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
      console.log(petsReturned);

      // Update the state
      ctx.setState({
        ...state,
        pets: petsReturned,
      });

      console.log('The currently state', state);
    });
  }
}
