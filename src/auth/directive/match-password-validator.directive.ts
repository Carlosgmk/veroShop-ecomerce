import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appMatchPasswordValidator]',
   standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordValidatorDirective,
      multi: true
    }
  ]
})
export class MatchPasswordValidatorDirective implements Validator {
  @Input('appMatchPasswordValidator') matchTo!: AbstractControl | NgModel ;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || !this.matchTo?.value) return null;

    const isMatching = control.value === this.matchTo.value;
    return isMatching ? null : { notMatching: true };
  }
}
