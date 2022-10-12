import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PetCategoryEnum } from '../types/app.interfaces';

export function categoryValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let forbidden = false;

    // Check the status available
    for (const property in PetCategoryEnum) {
      if (property == control.value) {
        forbidden = true;
        break;
      }
    }

    return !forbidden ? { category: { value: control.value } } : null;
  };
}
