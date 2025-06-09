import { Component, EventEmitter, Output } from '@angular/core';
import { CustomErrorStateMatcher } from './utils/custom-error-state-matcher';
import { getPasswordStrengthValue } from './utils/get-password-strengh-value';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from './interfaces/login-form';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthRecoverPasswordComponent } from './components/auth-recover-password/auth-recover-password.component';




@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
  
})
export class AuthComponent {
  @Output() loginSucesso = new EventEmitter<void>()
  
  matcher = new CustomErrorStateMatcher()

     passwordStrengthValue = 0

     constructor(
          private readonly _http: HttpClient,
          private dialogRef: MatDialogRef<AuthRecoverPasswordComponent>,
          private router: Router,
     ){}

     onPasswordChange(password: string) {
       this.passwordStrengthValue = getPasswordStrengthValue(password)
     }

 
     postLogin(email: string, password: string): Observable<LoginForm> {
       return this._http.post<LoginForm>('http://localhost:4000/login', { 
        email,
        password
      })
     }

     enviarLogin(form: NgForm) {
        if(form.valid){
           const { email, senha } = form.value

           this.postLogin(email, senha).subscribe({
             next: (response) => {
                  console.log('Login efetuado com sucesso:', response);
                  this.loginSucesso.emit()
                 // Aqui você pode navegar, salvar token, etc.
             },
             error: (err) => {
                console.error('Erro no login:', err)
             }
           })
        } else{
          console.log('Falta dados')
        }
     }

     recoverPassword() {
       this.dialogRef.close();
       setTimeout(() => {
       this.router.navigate(['/recover-password']);
    }, 1200);
    }
 
}
