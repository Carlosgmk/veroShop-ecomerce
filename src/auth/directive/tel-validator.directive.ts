import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
     selector: '[appTelValidator]',
     standalone: false,
     providers: [
          {
               provide: NG_VALIDATORS,
               useExisting: TelValidatorDirective,
               multi: true,
          }
     ],
})

export class TelValidatorDirective implements Validator {
   validate(control: AbstractControl): ValidationErrors | null {
       const telefone = control.value;

       if (!telefone) return null;

    // Regex: deve conter exatamente 11 dígitos numéricos, começar com DDD e 9
    const telefoneValido = /^[1-9]{2}9\d{8}$/.test(telefone);

    return telefoneValido ? null : { invalidTel: true };
   }
}