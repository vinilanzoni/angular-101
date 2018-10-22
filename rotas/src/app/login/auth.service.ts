import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAtenticado: boolean = false;

  loggedInEmmiter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if(user.name === 'user@email.com' && user.password === '123456') {
      this.usuarioAtenticado = true;

      this.loggedInEmmiter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.usuarioAtenticado = false;

      this.loggedInEmmiter.emit(false);
    }
  }

  isAuthenticated() {
    return this.usuarioAtenticado;
  }
}
