import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { LoginGoogle } from '../interfaces/login-google';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthGoogleService {
  private firebaseConfig = {
    apiKey: 'AIzaSyBWjTRaOuW25l8QmHHwK4TxN_QCOOpxdwc',
    authDomain: 'veroshop-e140f.firebaseapp.com',
    projectId: 'veroshop-e140f',
    storageBucket: 'veroshop-e140f.firebasestorage.app',
    messagingSenderId: '502493103596',
    appId: '1:502493103596:web:30f4be02228f02737bacc9',
    measurementId: 'G-PTJCQNFFFC',
  };

  private app: FirebaseApp;
  private auth: Auth;

  constructor() {
    // Inicializa o Firebase app e os serviços que você quer usar
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
  }

  loginWithGoogle(): Promise<LoginGoogle> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider).then(({ user }) => {
      return {
        uid: user.uid || '',
        email: user.email || '',
        displayName: user.displayName || ''
      };
    });
  }
}
