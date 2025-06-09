import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-auth-recover-password',
  standalone: false,
  templateUrl: './auth-recover-password.component.html',
  styleUrl: './auth-recover-password.component.scss'
})
export class AuthRecoverPasswordComponent {
  loading = false;
  ActiveStep = 1
  tokenRecebido: number = 0

  constructor(
     private readonly _http: HttpClient,
     private _snackBar: MatSnackBar
  ) {}

enviarRecuperacao(form: NgForm) {
    if (form.invalid) return;

    const email = form.value.email;
    this.loading = true;

    this._http.post<any>('http://localhost:4000/recoverpassword', { email })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res) => {
          const token = res?.token;
          this.tokenRecebido = res?.token;

          if (token) {
            this.enviarEmail(token, email); // ✅ Envia o e-mail com o token
            this._snackBar.open('Link de recuperação enviado com sucesso!', 'Fechar', { duration: 3000 });
            form.resetForm();

            this.ActiveStep = 2

            console.log('Token recebido do backend:', token); 
          } else {
            this._snackBar.open('Erro: token não recebido do servidor.', 'Fechar', { duration: 3000 });
          }
        },
        error: (err) => {
          console.log(err);
          this._snackBar.open('Erro ao enviar link de recuperação. Verifique o e-mail.', 'Fechar', { duration: 6000 });
        }
      });
  }

  enviarEmail(token: string, email: string) {
    const templateParams = {
      to_email: email,
      token: token
    };

    emailjs.send('service_lgam59c', 'template_3yhmci9', templateParams, 'irC1d1DX6lsmYOTt5')
      .then((response) => {
        console.log('✅ E-mail enviado com sucesso!', response.status, response.text);
      })
      .catch((error) => {
        console.error('❌ Erro ao enviar e-mail:', error);
      });
  }
  
  validCode(CodeForm: NgForm) {
    console.log(this.tokenRecebido)
    let code = Number(CodeForm.value.code)

    if(code === this.tokenRecebido) {
       this.ActiveStep = 3

    } else{
       this._snackBar.open('Verifique seu Email e coloque o codigo correto', 'Fechar', { duration: 6000 });
    }
  }

  newPassword(form: NgForm){
     const password = form.value.password
     const confirmPassword = form.value.confirmPassword
     const token = this.tokenRecebido


     if(password === confirmPassword){
      this._http.post<any>('http://localhost:4000/changepassword', { token, password })
      .subscribe({
        next: () => {
          this._snackBar.open('Senha alterada com sucesso!', 'Fechar', { duration: 3000 });
          form.resetForm();
          this.tokenRecebido = 0;
        },
        error: (err) => {
          console.error(err);
          this._snackBar.open('Erro ao alterar senha. Token inválido ou expirado.', 'Fechar', { duration: 3000 });
        }
      })

     } else {
       alert('As senhas não correspondem')
     }
  }

  cancel() {
      this.ActiveStep = 1
  }
}
