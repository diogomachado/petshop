import { NavbarComponent } from './../../components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PetListComponent } from './pet-list.component';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetListComponent, NavbarComponent],
      imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have an add button', () => {
    const el = fixture.debugElement.query(By.css('.add-button')).nativeElement;
    expect(el).toBeTruthy();
  });
});
