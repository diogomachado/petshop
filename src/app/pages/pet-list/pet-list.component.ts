import { PetSelectors } from './../../state/app.selectors';
import { PetAction } from './../../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Pet, PetStatus } from '../../types/app.interfaces';
import { Observable } from 'rxjs';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  isLoading = true;
  lottieConfig: AnimationOptions = {
    path: './assets/lottie/65014-dog-walking.json',
  };
  petStatusSelected: PetStatus = PetStatus.Available;
  @Select(PetSelectors.pets) pets$!: Observable<Pet[]>;
  @Select(PetSelectors.pet) pet$!: Observable<Pet>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      new PetAction.FetchAllByStatusAction(this.petStatusSelected)
    );

    this.store.subscribe((state) => {
      console.log('State subscribe', state);
      if (state.pets != null) {
        // Set delay 2s
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    });
  }

  openModal() {
    this.store.dispatch(new PetAction.GetOnePetAction());
  }
}
