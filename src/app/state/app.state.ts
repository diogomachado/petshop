import { PetDataService } from './../services/pet-data.service';
import { PetAction } from './app.actions';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { App } from '../types/app.interfaces';
import { mergeMap } from 'rxjs';

export const getAppInitialState = (): App => ({
  pets: null,
  pet: null,
  userLogged: false,
});

@State<App>({
  name: 'pets',
  defaults: getAppInitialState(),
})
@Injectable()
export class AppPetState {
  constructor(private petDataService: PetDataService) {}

  @Action(PetAction.LoginAction)
  login(ctx: StateContext<App>, action: PetAction.LoginAction) {
    this.petDataService
      .login(action.user)
      .pipe(mergeMap((x) => ctx.dispatch(new PetAction.LoginSuccessAction(x))))
      .subscribe();
  }

  @Action(PetAction.LoginSuccessAction)
  loginSuccess(ctx: StateContext<App>, action: PetAction.LoginSuccessAction) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      userLogged: action.payload.code == 200,
    });
  }

  @Action(PetAction.LogoutAction)
  logout(ctx: StateContext<App>, action: PetAction.LogoutAction) {
    this.petDataService
      .logout()
      .pipe(mergeMap((x) => ctx.dispatch(new PetAction.LogoutSuccessAction(x))))
      .subscribe();
  }

  @Action(PetAction.LogoutSuccessAction)
  logoutSuccess(ctx: StateContext<App>, action: PetAction.LogoutSuccessAction) {
    const state = ctx.getState();

    ctx.setState(getAppInitialState());
  }

  @Action(PetAction.GetOnePetAction)
  getOnePet(ctx: StateContext<App>, action: PetAction.GetOnePetAction) {
    this.petDataService
      .getPet(action.id)
      .pipe(
        mergeMap((x) => ctx.dispatch(new PetAction.GetOnePetSuccessAction(x)))
      )
      .subscribe();
  }

  @Action(PetAction.GetOnePetSuccessAction)
  getOnePetSuccess(
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
      )
      .subscribe();
  }

  @Action(PetAction.FetchAllByStatusSuccessAction)
  async fetchAllByStatusSuccess(
    ctx: StateContext<App>,
    action: PetAction.FetchAllByStatusSuccessAction
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      pets: action.payload,
    });
  }

  @Action(PetAction.AddPetAction)
  addPet(ctx: StateContext<App>, action: PetAction.AddPetAction) {
    this.petDataService
      .addPet(action.payload)
      .pipe(mergeMap((x) => ctx.dispatch(new PetAction.AddPetSuccessAction(x))))
      .subscribe();
  }
}
