import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import firebase from 'firebase/compat';

import { AuthService } from '../../services/auth.service';
import AuthError = firebase.auth.AuthError;
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login() {
    const user = this.loginForm.value;

    this.authService.login(user).subscribe({
      next: (res: UserCredential) => {
        this.router.navigate(['/gifs/list']);
      },
      error: (err: AuthError) => {
        // TODO: Manejo de errores mostrando modales con mensajes
        console.log(err.code);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Debe ingresar un correo electrónico';
    }

    return this.email?.hasError('email') ? 'No es un correo válido' : '';
  }

  getPasswordErrorMessage() {
    return this.password?.hasError('required') ? 'Debe ingresar la contraseña' : '';
  }

  private createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

}
