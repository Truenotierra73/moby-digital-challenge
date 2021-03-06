import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

import { from, Observable } from 'rxjs';

import { User } from '../interfaces/user.interface';

import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  register() {
    // TODO: Hacer registro
  }

  login(user: User): Observable<UserCredential> {
    const promise = this.auth.signInWithEmailAndPassword(user.email, user.password);

    return from(promise);
  }

  signOut(): Observable<void> {
    const promise = this.auth.signOut();

    return from(promise);
  }
}
