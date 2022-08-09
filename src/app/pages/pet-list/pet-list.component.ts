import { PetSelectors } from './../../state/app.selectors';
import { PetAction } from './../../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Pet, PetStatus } from '../../types/app.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  petStatusSelected: PetStatus = PetStatus.Available;
  @Select(PetSelectors.pets) pets$!: Observable<Pet[]> | null;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      new PetAction.FetchAllByStatusAction(this.petStatusSelected)
    );

    this.store.subscribe((state) => {
      console.log('State subscribe', state);
    });
  }

  openModal() {
    this.store.dispatch(new PetAction.GetOnePetAction());
  }
}
