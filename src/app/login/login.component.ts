import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    if (
      this.loginForm.value.email === 'mk@email.com' &&
      this.loginForm.value.password === '123456'
    ) {
      this.router.navigateByUrl('/names');
    }
  }
}

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   // styleUrls: ['./login.component.css'],
// })
// // implements OnInit
// export class LoginComponent implements OnInit {
//   loginForm: any{} = FormGroup;
//   constructor() {

//   }

//   ngOnInit(private FormGroup: FormGroup) {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [
//         Validators.required,
//         Validators.minLength(6),
//       ]),
//     });
//   }
//   onLogin() {
//     console.log('onLogin');
//   }
// }
