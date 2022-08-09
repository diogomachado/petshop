import { Pet, PetStatus } from '../types/app.interfaces';

export namespace PetAction {
  export class GetOnePetAction {
    static readonly type = '[Pet] GetOnePet';
    constructor() {}
  }

  export class FetchAllByStatusAction {
    static readonly type = '[Pet] Fetch AllByStatus';
    constructor(public status: PetStatus) {}
  }
}
