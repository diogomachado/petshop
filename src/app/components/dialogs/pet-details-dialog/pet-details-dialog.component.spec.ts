import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsDialogComponent } from './pet-details-dialog.component';

describe('PetDetailsDialogComponent', () => {
  let component: PetDetailsDialogComponent;
  let fixture: ComponentFixture<PetDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetDetailsDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      imports: [MatButtonModule, MatDialogModule, MatChipsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PetDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should verify dialogRef is defined', () => {
    expect(component.dialogRef).toBeDefined();
  });
});
