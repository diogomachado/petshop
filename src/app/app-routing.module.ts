import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pets',
    loadChildren: () =>
      import('./pages/pet-list/pet-list.module').then((m) => m.PetListModule),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/pet-add/pet-add.module').then((m) => m.PetAddModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
