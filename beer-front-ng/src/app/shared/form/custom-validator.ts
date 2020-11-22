import {AbstractControl, ValidationErrors} from '@angular/forms';


export class CustomValidator {

  static degree(control: AbstractControl): ValidationErrors | null {
    return (control.value >= 0 && control.value <= 100) ? null : {
      degree: true
    };

  }
}
