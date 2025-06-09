// src/app/services/firebase-auth.service.ts
import { Injectable } from '@angular/core';

// Importações do Firebase
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { getAnalytics, Analytics } from 'firebase/analytics';


@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private firebaseConfig = {
    apiKey: "AIzaSyBWjTRaOuW25l8QmHHwK4TxN_QCOOpxdwc",
    authDomain: "veroshop-e140f.firebaseapp.com",
    projectId: "veroshop-e140f",
    storageBucket: 'veroshop-e140f.firebasestorage.app',
    messagingSenderId: "502493103596",
    appId: "1:502493103596:web:30f4be02228f02737bacc9",
    measurementId: "G-PTJCQNFFFC"
  };

  private app: FirebaseApp;
  private auth: Auth;
  private analytics: Analytics;

  constructor() {
    // Inicializa o Firebase app e os serviços que você quer usar
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    this.analytics = getAnalytics(this.app);
  }

  // Método para configurar o reCAPTCHA invisível (necessário para autenticação por telefone)
  setupRecaptcha(containerId: string): RecaptchaVerifier {
    return new RecaptchaVerifier(this.auth, containerId, {
      'size': 'invisible',
      callback: (response: any) => {
      console.log('reCAPTCHA resolvido automaticamente', response);
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expirado');
    }
    });
  }

  // Método para iniciar autenticação via telefone
  signInWithPhoneNumber(phoneNumber: string, recaptchaVerifier: RecaptchaVerifier): Promise<ConfirmationResult> {
    return signInWithPhoneNumber(this.auth, phoneNumber, recaptchaVerifier);
  }

  createUser(email: string, password: string): Promise<UserCredential> {
    console.log('Email:', email);
    console.log('Password:', password);
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
