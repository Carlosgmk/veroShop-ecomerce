import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-email',
  standalone: false,
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss',
})
export class ConfirmEmailComponent {
  mostrarConfirmacaoEmail = true;

  constructor(
    private dialogRef: MatDialogRef<ConfirmEmailComponent>
  ) {}

  verificarEmailConfirmado() {
    const auth = getAuth();
    const user = auth.currentUser;

    user?.reload().then(() => {
      if (user.emailVerified) {
        console.log('✅ E-mail verificado com sucesso!');

        this.dialogRef.close(true); // Envia resultado para o componente pai
      } else {
        alert(
          'Seu e-mail ainda não foi verificado. Verifique a caixa de entrada.'
        );
      }
    });
  }

  cancelarVerificacaoEmail() {
    this.mostrarConfirmacaoEmail = false;
    this.dialogRef.close(false);
  }
}
