import { RouterModule } from '@angular/router';
import { PetAddComponent } from './pet-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [{ path: '', component: PetAddComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PetAddModule {}
