import { App, Pet, PetStatus } from '../types/app.interfaces';

export namespace PetAction {
  export class GetOnePetAction {
    static readonly type = '[Pet] GetOnePet';
    constructor(public id: number) {}
  }

  export class GetOnePetSuccessAction {
    static readonly type = '[Pet] GetOnePet Success';
    constructor(public payload: Pet) {}
  }

  export class GetOnePetFailedAction {
    static readonly type = '[Pet] GetOnePet Failed';
    constructor(public payload?: any) {}
  }

  export class FetchAllByStatusAction {
    static readonly type = '[Pet] Fetch AllByStatus';
    constructor(public status: PetStatus) {}
  }

  export class FetchAllByStatusSuccessAction {
    static readonly type = '[Pet] Fetch AllByStatus Success';
    constructor(public payload: Pet[]) {}
  }

  export class FetchAllByStatusFailedAction {
    static readonly type = '[Pet] Fetch AllByStatus Failed';
    constructor(public payload?: any) {}
  }
}

// Dummy for unit testing purpose
export class DummySetState {
  static readonly type = '[Pet] Dummy SetState';
  constructor(public payload: App) {}
}
