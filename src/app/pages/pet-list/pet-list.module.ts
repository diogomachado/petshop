import { RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [{ path: '', component: PetListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PetListModule {}
