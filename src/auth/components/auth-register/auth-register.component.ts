import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { RegisterResponse } from '../../interfaces/register-form';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { getAuth, sendEmailVerification, User } from 'firebase/auth';
import { ConfirmationResult, RecaptchaVerifier } from 'firebase/auth';
import { ConfirmPhoneCodeComponent } from '../confirm-phone-code/confirm-phone-code.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmEmailComponent } from '../confirm-email/confirm-email.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-register',
  standalone: false,
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.scss',
})
export class AuthRegisterComponent {
  @Output() registerSucesso = new EventEmitter<void>();
  verificacao: string = '';

  recaptchaVerifier!: RecaptchaVerifier;
  confirmationResult!: ConfirmationResult;

  constructor(
    private readonly _http: HttpClient,
    private router: Router,
    private firebaseAuthService: FirebaseAuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  postRegister(
    name: string,
    email: string,
    password: string,
    tel: string
  ): Observable<RegisterResponse> {
    return this._http.post<RegisterResponse>('http://localhost:4000/user', {
      name,
      email,
      password,
      tel,
    });
  }

  async enviarRegistro(form: NgForm): Promise<void> {
    console.log(form.value);
    if (form.valid) {
      const { name, email, password, tel, verificacao } = form.value;
      console.log(form.value.verificacao);
      const location = '+55';
      const telefone = location + tel;
      console.log('O telefone enviado foi essse aqui ó', telefone);

      if (verificacao === 'tel') {
        try {
          await this.enviarCodigoSMS(telefone);
          this.openModalConfirmTel(name, email, password, tel);
        } catch (error) {
          this.snackBar.open('Erro ao enviar SMS.', 'Fechar', { duration: 4000 });
        }
      } else if (verificacao === 'email') {
        try {
          const cred = await this.firebaseAuthService.createUser(
            email,
            password
          );
          await this.enviarEmailVerificacao(cred.user);
          this.openModalConfirmEmail(name, email, password, tel);
        } catch (err) {
          console.error('Erro ao criar usuário Firebase:', err);
          this.snackBar.open('Erro ao criar conta. Verifique os dados.','Fechar', { duration: 4000 });
        }
      } else {
        alert('Por favor, selecione uma opção de verificação.');
      }

      // this.registerSucesso.emit();
    } else {
      console.log('Dados faltando!');
    }
  }

  enviarEmailVerificacao(user: User): Promise<void> {
    if (user && user.email) {
      return sendEmailVerification(user)
        .then(() => {
          alert(
            'E-mail de verificação enviado. Verifique sua caixa de entrada.'
          );
          console.log('E-mail de verificação enviado para:', user.email);
        })
        .catch((error) => {
          console.error('Erro ao enviar e-mail de verificação:', error);
          this.snackBar.open('Erro ao enviar e-mail de verificação. Tente novamente.', 'Fechar' , { duration: 4000});
        });
    } else {
      console.warn('Usuário não está logado ou e-mail não corresponde.');
      return Promise.resolve(); // retorna uma Promise vazia para manter a assinatura
    }
  }

  enviarCodigoSMS(tel: string): Promise<void> {
    if (!this.recaptchaVerifier) {
      this.recaptchaVerifier = this.firebaseAuthService.setupRecaptcha(
        'recaptcha-container'
      );
    }

    return this.firebaseAuthService
      .signInWithPhoneNumber(tel, this.recaptchaVerifier)
      .then((result) => {
        this.confirmationResult = result;
        console.log('SMS enviado!');
      })
      .catch((error) => {
        console.error('Erro ao enviar SMS:', error);
        throw error; // para propagar o erro caso queira tratar depois
      });
  }

  openModalConfirmTel(
    name: string,
    email: string,
    password: string,
    tel: string
  ) {
    (document.activeElement as HTMLElement)?.blur();
    const dialogRef = this.dialog.open(ConfirmPhoneCodeComponent, {
      data: { confirmationResult: this.confirmationResult }
    });
    this.snackBar.open('Código enviado verifique suas Mensagens.', 'Fechar', { duration: 4000 });
    dialogRef.afterClosed().subscribe((codigoValido) => {
      if (codigoValido) {
        console.log('Código digitado:', codigoValido);
        // Aqui você usa `this.confirmationResult.confirm(codigoValido)` para verificar

          this.postRegister(name, email, password, tel).subscribe(() => {
        this.registerSucesso.emit();
        console.log('Usuário cadastrado!');
        this.router.navigate(['/']);
      });
      } else {
        console.warn('Nenhum código foi digitado.');
        this.snackBar.open('Código inválido ou não confirmado.', 'Fechar', { duration: 4000 });
      }
    });
  }

  openModalConfirmEmail(
    name: string,
    email: string,
    password: string,
    tel: string
  ) {
    (document.activeElement as HTMLElement)?.blur();

    const dialogRef = this.dialog.open(ConfirmEmailComponent, {});

    dialogRef.afterClosed().subscribe(async  (emailVerificado) => {
      const user = getAuth().currentUser;
      if (emailVerificado) {
        console.log('✅ E-mail confirmado! Agora pode enviar para o banco.');

        this.postRegister(name, email, password, tel).subscribe({
          next: (res) => {
            console.log('✅ Dados enviados para o backend com sucesso:', res);
            this.registerSucesso.emit();
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('❌ Erro ao enviar dados para o backend:', err);
          },
        });


      } else {
         if(user) {
            try {
               await user.delete()
               console.log('Usuário removido do Firebase por não confirmar o e-mail.');
               
            } catch (error){
                console.error('Erro ao excluir usuário do Firebase:', error);
            }
         }
      }
    });
  }
}
