import { PetDetailsDialogComponent } from './../../components/dialogs/pet-details-dialog/pet-details-dialog.component';
import { PetSelectors } from './../../state/app.selectors';
import { PetAction } from './../../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Pet, PetStatus } from '../../types/app.interfaces';
import { filter, Observable, take } from 'rxjs';
import { AnimationOptions } from 'ngx-lottie';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(
      new PetAction.FetchAllByStatusAction(this.petStatusSelected)
    );

    this.store.subscribe((state) => {
      if (state.pets != null) {
        // Set delay 2s
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    });

    this.pet$.pipe(filter((x) => x != null)).subscribe((petData) => {
      if (petData != null) {
        const dialogRef = this.dialog.open(PetDetailsDialogComponent, {
          width: '450px',
          data: petData,
        });

        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed', result);
        });
      }
    });
  }

  openModal(id: number) {
    this.store.dispatch(new PetAction.GetOnePetAction(id));
    console.log('openModal');
  }
}
