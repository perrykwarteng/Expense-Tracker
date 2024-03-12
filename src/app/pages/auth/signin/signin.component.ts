import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signInForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.signInForm = this._fb.group({
      email: [ [Validators.email, Validators.required]],
      password: [[Validators.required, Validators.minLength(5)]],
      keepMe: [ []],
    });
  }

  signInFunction() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      this.signInForm.reset();
    } else {
      console.error('sorry');
    }
  }
}
