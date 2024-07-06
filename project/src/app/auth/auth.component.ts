import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = false;

  constructor(private authService: AuthService) {}

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);

    if (!form.valid) {
      return;
    }

    if (this.isLoginMode) {
    } else {
      const email = form.value.email;
      const password = form.value.password;

      this.authService.signup(email, password).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}
