import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from './utils/custom-error-state-matcher';
import { getPasswordStrengthValue } from './utils/get-password-strengh-value';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
  
})
export class AuthComponent {
   matcher = new CustomErrorStateMatcher()
   passwordStrengthValue = 0

   onPasswordChange(password: string) {
       this.passwordStrengthValue = getPasswordStrengthValue(password)
    }
}
