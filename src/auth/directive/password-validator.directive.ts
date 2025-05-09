import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordValidator]',
  standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})

export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;

    const result = zxcvbn(control.value);

    const PASSWORD_IS_WEAK_OR_MEDIUM = result.score !== 4;

    if (PASSWORD_IS_WEAK_OR_MEDIUM) {
      return { invalidPasswordStrength: true };
    }

    return null;
  }
}
