import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './firebase-auth.service';
import { RegisterResponse } from '../interfaces/register-form';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginGoogle } from '../interfaces/login-google';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'http://localhost:4000/user/google';

  constructor(
    private readonly _http: HttpClient,
  ) {}

  saveUser(user: LoginGoogle): Observable<RegisterResponse> {
    return this._http.post<RegisterResponse>(this.apiUrl, user);
  }
}
