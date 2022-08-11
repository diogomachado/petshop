export interface App {
  pets: Pet[] | null;
  pet: Pet | null;
  userLogged: boolean;
}

export interface AppApp {
  readonly app: App;
}

export enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export interface Pet {
  id: number;
  name: string;
  status: PetStatus;
}

export interface APIResponse {
  code: number;
  type: string;
  message: string;
}

export interface User {
  username: string;
  password: string;
}

export interface DialogData {
  pet: Pet;
}
