import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationResult } from 'firebase/auth';

@Component({
  selector: 'app-confirm-phone-code',
  standalone: false,
  templateUrl: './confirm-phone-code.component.html',
  styleUrl: './confirm-phone-code.component.scss',
})
export class ConfirmPhoneCodeComponent {
  codigo: string = '';

  constructor(
    public dialogRef: MatDialogRef<ConfirmPhoneCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { confirmationResult: ConfirmationResult },
    private snackBar: MatSnackBar
  ) {}

  confirmarCodigo() {
    this.data.confirmationResult.confirm(this.codigo)
    .then(userCredential => {
       this.dialogRef.close(this.codigo)
    })
    .catch(error => {
       this.snackBar.open('Código inválido ou expirado. Tente novamente' ,'Fechar' , { duration: 3000  })
    })
  }

  cancel() {
    this.dialogRef.close();
  }
  
}
