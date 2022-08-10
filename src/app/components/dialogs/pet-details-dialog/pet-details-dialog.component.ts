import { DialogData } from './../../../types/app.interfaces';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-details-dialog',
  templateUrl: './pet-details-dialog.component.html',
  styleUrls: ['./pet-details-dialog.component.scss'],
})
export class PetDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PetDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
