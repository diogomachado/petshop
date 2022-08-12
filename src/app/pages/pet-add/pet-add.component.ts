import { Title } from '@angular/platform-browser';
import { Pet, PetStatus } from './../../types/app.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { PetAction } from '../../state/app.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss'],
})
export class PetAddComponent implements OnInit {
  submitted = false;
  addForm: FormGroup;

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private title: Title
  ) {
    this.addForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      status: new FormControl(PetStatus.Available.toString(), [
        Validators.required,
      ]),
      category: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Petshop – Create a new pet');
  }

  selectStatus(status: PetStatus) {
    this.addForm.controls['status'].setValue(status);
  }

  handleSubmit() {
    let tags = this.addForm.controls['tags'].value.split(',');
    tags = tags.map((item: string) => {
      return {
        name: item,
      };
    });

    const dataForm = <Pet>{
      category: {
        name: this.addForm.controls['category'].value,
      },
      name: this.addForm.controls['name'].value,
      photoUrls: [this.addForm.controls['image'].value],
      tags: tags,
      status: this.addForm.controls['status'].value,
    };

    this.store.dispatch(new PetAction.AddPetAction(dataForm));
    this.router.navigate(['/pets']);
    this.snackBar.open('Pet registered with success!', undefined, {
      duration: 4000,
    });
  }
}
