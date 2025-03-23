import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (this.authService.signup({ username: this.username, password: this.password })) {
      this.router.navigate(['/login']);
    } else {
      this.error = 'User already exists!';
    }
  }
}
