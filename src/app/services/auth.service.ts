import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  checkUser(username, password): boolean {
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
}
