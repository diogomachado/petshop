import { Component, OnInit } from '@angular/core';

enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}
interface Pet {
  name: string;
  status: PetStatus;
}

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  // TODO: mock data to test
  pets: Pet[] = [
    {
      name: 'Bob',
      status: PetStatus.Available,
    },
    {
      name: 'Sasha',
      status: PetStatus.Available,
    },
    {
      name: 'Lion',
      status: PetStatus.Available,
    },
    {
      name: 'Tor',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
    {
      name: 'Mimi',
      status: PetStatus.Available,
    },
  ];

  openModal() {}
}
