import { RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes = [{ path: '', component: PetListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PetListModule {}
