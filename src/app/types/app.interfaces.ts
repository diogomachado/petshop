export interface App {
  pets: Pet[] | null;
  pet: Pet | null;
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

export interface DialogData {
  pet: Pet;
}
