import { PetStatus } from './../../types/app.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss'],
})
export class PetAddComponent implements OnInit {
  submitted = false;
  addForm: FormGroup;

  constructor() {
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

  ngOnInit(): void {}

  selectStatus(status: PetStatus) {
    this.addForm.controls['status'].setValue(status);
  }

  handleSubmit() {
    console.log(this.addForm.value);
  }
}
