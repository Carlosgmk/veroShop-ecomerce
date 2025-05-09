import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  standalone: false,
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss'
})
export class DialogUserComponent {
  constructor(private dialogRef: MatDialogRef<DialogUserComponent>) {}

  exitModal (){
       this.dialogRef.close()
    }
}
