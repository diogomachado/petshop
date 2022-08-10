import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsDialogComponent } from './pet-details-dialog.component';

describe('PetDetailsDialogComponent', () => {
  let component: PetDetailsDialogComponent;
  let fixture: ComponentFixture<PetDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
