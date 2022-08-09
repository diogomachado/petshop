import { AppPetState } from './app.state';
import { Selector } from '@ngxs/store';
import { App, Pet } from '../types/app.interfaces';

export class PetSelectors {
  @Selector([AppPetState])
  static pet(state: App): Pet | null {
    return state.pet;
  }

  @Selector([AppPetState])
  static pets(state: App): Pet[] | null {
    return state.pets;
  }
}
