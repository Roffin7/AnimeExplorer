import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  signup(user: { username: string; password: string }): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.username === user.username)) {
      return false; // User already exists
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(username: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}
