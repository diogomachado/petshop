import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { PetAction } from '../../state/app.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private store: Store) {}
  logout() {
    this.store.dispatch(new PetAction.LogoutAction());
    this.router.navigate(['/login']);
  }
}
