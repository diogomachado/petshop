import { PetStatus } from './../../types/app.interfaces';
import { MatChipsModule } from '@angular/material/chips';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSelectComponent } from './status-select.component';

describe('StatusSelectComponent', () => {
  let component: StatusSelectComponent;
  let fixture: ComponentFixture<StatusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusSelectComponent],
      imports: [MatChipsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit status when click on item', () => {
    const outputSpy = jest.spyOn(component.statusSelectChange, 'emit');
    fixture.nativeElement.querySelector('.mat-chip').click();
    expect(outputSpy).toHaveBeenCalled();
  });
});
