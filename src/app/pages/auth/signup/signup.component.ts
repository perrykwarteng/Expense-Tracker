import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.signUpForm = this._fb.group({
      fullName: [, [Validators.required]],
      email: [, [Validators.email, Validators.required]],
      password: [, [Validators.required, Validators.minLength(5)]],
    });
  }

  signinfunction() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.signUpForm.reset();
    } else {
      console.error('sorry');
    }
  }
}
