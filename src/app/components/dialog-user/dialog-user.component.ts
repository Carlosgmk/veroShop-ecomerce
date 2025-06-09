import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseAuthGoogleService } from '../../../auth/services/firebase-auth-google.service';
import { LoginGoogle } from '../../../auth/interfaces/login-google';
import { UserService } from '../../../auth/services/user.service';

@Component({
  selector: 'app-dialog-user',
  standalone: false,
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss',
})
export class DialogUserComponent {
  isLoading: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DialogUserComponent>,
    private router: Router,
    private authService: FirebaseAuthGoogleService,
    private userService: UserService
  ) {}

  exitModal() {
    this.dialogRef.close();
  }

  registerAccount() {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 1200);
  }

  async loginWithGoogle(): Promise<LoginGoogle | void> {
    try {
      const user = await this.authService.loginWithGoogle();
      const userData: LoginGoogle ={
      uid: user.uid || '',
      email: user.email || '',
      displayName: user.displayName || ''
    };
      console.log('Usuário Logado:', user.displayName, user.email, user);
      
      this.userService.saveUser(userData).subscribe({
         next:(response) => {
              console.log('Usuário salvo no banco:', response);
              this.dialogRef.close();
         },
          error: (err) => {
              console.error('Erro ao salvar usuário:', err);
          },
      })


    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  }
}
