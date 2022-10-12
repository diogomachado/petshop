import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StatusSelectComponent } from './../../components/status-select/status-select.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { AppPetState } from '../../state/app.state';

import PetAddComponent from './pet-add.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PetAddComponent', () => {
  let component: PetAddComponent;
  let fixture: ComponentFixture<PetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetAddComponent, NavbarComponent, StatusSelectComponent],
      imports: [
        NgxsModule.forRoot([AppPetState]),
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatChipsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
