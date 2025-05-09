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
import {  MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
     AuthComponent,
     EmailValidatorDirective,
     PasswordValidatorDirective
     
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
     MatProgressBarModule
],
  exports: [
     AuthComponent,
     EmailValidatorDirective,
     PasswordValidatorDirective,
     MatProgressBarModule
  ]
})
export class AuthModule {}
