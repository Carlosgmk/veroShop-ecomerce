import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoading: boolean = false;
  topNotifications: string[] = [
    'ENVIO IMEDIATO',
    'COMPRE AGORA COM  FRETE GRÁTIS',
    'DESCONTO EM ROUPAS DE VERÃO',
  ];

  constructor(private dialog: MatDialog) {}

  DialogRegisterUser() {
    console.log('clicado')
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.dialog.open(DialogUserComponent, {
        panelClass: 'custom-dialog-container'
      });
    }, 2000);
  }

  bagUser() {
    console.log('bagUser clicada');
  }




  currentNotificationIndex: number = 0;
  ngOnInit() {
    setInterval(() => {
      this.currentNotificationIndex =
        (this.currentNotificationIndex + 1) % this.topNotifications.length;
    }, 5000);
  }
}
