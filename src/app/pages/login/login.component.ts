import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PetAction } from '../../state/app.actions';
import { User } from '../../types/app.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;

  constructor(private router: Router, private store: Store) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      if (state.pets.userLogged) {
        this.router.navigate(['/pets']);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new PetAction.LoginAction(<User>this.loginForm.value));
  }
}
