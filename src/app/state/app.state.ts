import { PetDataService } from './../services/pet-data.service';
import { PetAction } from './app.actions';
import { Injectable, OnDestroy } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { App } from '../types/app.interfaces';
import { mergeMap, Subscription, take } from 'rxjs';

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
export class AppPetState implements OnDestroy {
  loginSubscription: Subscription | undefined;
  logoutSubscription: Subscription | undefined;
  getPetSubscription: Subscription | undefined;
  getListByStatusSubscription: Subscription | undefined;
  addPetSubscription: Subscription | undefined;

  constructor(private petDataService: PetDataService) {}

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
    this.logoutSubscription?.unsubscribe();
    this.getPetSubscription?.unsubscribe();
    this.getListByStatusSubscription?.unsubscribe();
    this.addPetSubscription?.unsubscribe();
  }

  @Action(PetAction.LoginAction)
  login(ctx: StateContext<App>, action: PetAction.LoginAction) {
    this.loginSubscription = this.petDataService
      .login(action.user)
      .pipe(take(1))
      .subscribe((x) => ctx.dispatch(new PetAction.LoginSuccessAction(x)));
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
    this.logoutSubscription = this.petDataService
      .logout()
      .pipe(take(1))
      .subscribe((x) => ctx.dispatch(new PetAction.LogoutSuccessAction(x)));
  }

  @Action(PetAction.LogoutSuccessAction)
  logoutSuccess(ctx: StateContext<App>, action: PetAction.LogoutSuccessAction) {
    const state = ctx.getState();

    ctx.setState(getAppInitialState());
  }

  @Action(PetAction.GetOnePetAction)
  getOnePet(ctx: StateContext<App>, action: PetAction.GetOnePetAction) {
    this.getPetSubscription = this.petDataService
      .getPet(action.id)
      .pipe(take(1))
      .subscribe((x) => ctx.dispatch(new PetAction.GetOnePetSuccessAction(x)));
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
    this.getListByStatusSubscription = this.petDataService
      .getListByStatus(action.status)
      .pipe(take(1))
      .subscribe((x) =>
        ctx.dispatch(new PetAction.FetchAllByStatusSuccessAction(x))
      );
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
    this.addPetSubscription = this.petDataService
      .addPet(action.payload)
      .pipe(take(1))
      .subscribe((x) => ctx.dispatch(new PetAction.AddPetSuccessAction(x)));
  }
}
