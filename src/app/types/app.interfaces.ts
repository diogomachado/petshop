// State
export interface App {
  pets: Pet[] | null;
  pet: Pet | null;
  userLogged: boolean;
}

export interface AppApp {
  readonly app: App;
}

// Pet
export interface Pet {
  id: number;
  category: PetCategory;
  name: string;
  photoUrls: Array<string>;
  tags: Array<PetTag>;
  status: PetStatus;
}

export enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export enum PetCategoryEnum {
  Cats = 'cats',
  Dogs = 'dogs',
  Lions = 'lions',
  Rabbits = 'rabbits',
}

export interface PetCategory {
  id?: number;
  name: string;
}

export interface PetTag {
  id?: number;
  name: string;
}

// API
export interface APIResponse {
  code: number;
  type: string;
  message: string;
}

// User
export interface User {
  username: string;
  password: string;
}
