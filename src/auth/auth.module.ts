import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { EmailValidatorDirective } from './directive/email-validator.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordValidatorDirective } from './directive/password-validator.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthRecoverPasswordComponent } from './components/auth-recover-password/auth-recover-password.component';
import { MatRadioModule } from '@angular/material/radio';
import { ConfirmPhoneCodeComponent } from './components/confirm-phone-code/confirm-phone-code.component';
import { TelValidatorDirective } from './directive/tel-validator.directive';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { MatchPasswordValidatorDirective } from './directive/match-password-validator.directive';



@NgModule({
  declarations: [
     AuthComponent,
     EmailValidatorDirective,
     PasswordValidatorDirective,
     AuthRegisterComponent,
     AuthRecoverPasswordComponent,
     ConfirmPhoneCodeComponent,
     TelValidatorDirective,
     ConfirmEmailComponent,
     BackButtonComponent,
     MatchPasswordValidatorDirective
    
     
  ],
  imports: [
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatButtonModule,
     MatTooltipModule,
     MatProgressBarModule,
     MatRadioModule,
],
  exports: [
     AuthComponent,
     EmailValidatorDirective,
     PasswordValidatorDirective,
     MatProgressBarModule,
     AuthRegisterComponent,
     AuthRecoverPasswordComponent,
     MatRadioModule,
     TelValidatorDirective,
     FormsModule
  ]
})
export class AuthModule {}
