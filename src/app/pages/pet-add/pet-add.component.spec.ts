import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddComponent } from './pet-add.component';

describe('PetAddComponent', () => {
  let component: PetAddComponent;
  let fixture: ComponentFixture<PetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
