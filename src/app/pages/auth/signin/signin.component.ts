import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signinForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.signinForm = this._fb.group({
      email: [, [Validators.email, Validators.required]],
      password: [, [Validators.required, Validators.minLength(5)]],
      keepme: [, []],
    });
  }

  signinfunction() {
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);
      this.signinForm.reset();
    } else {
      console.error('sorry');
    }
  }
}
